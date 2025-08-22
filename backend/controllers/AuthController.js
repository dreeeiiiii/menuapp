import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { sendEmail } from "../utils/mailer.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// ---------- Gmail OAuth2 setup ----------
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function getOAuth2Transporter() {
  const accessToken = await oAuth2Client.getAccessToken(); // throws if refresh token invalid
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken?.token,
    },
  });
}

// ---------- helpers ----------
function appUrl(path = "") {
  // change to your deployed frontend URL when ready
  const base = process.env.FRONTEND_URL || "http://localhost:5173";
  return `${base.replace(/\/$/, "")}${path}`;
}

// ------------------ CONTROLLERS ------------------

export const signup = async (req, res) => {
  const { email, password, fullname, location, category } = req.body;

  if (!email || !password || !fullname || !category) {
    return res.status(400).json({ message: "Email, password, fullname, and category are required" });
  }

  if (!["customer", "business_owner"].includes(category)) {
    return res.status(400).json({ message: "Category must be either 'customer' or 'business_owner'" });
  }

  try {
    const existingUser = await pool.query("SELECT 1 FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password, fullname, location, category) VALUES ($1, $2, $3, $4, $5)",
      [email, hashedPassword, fullname, location || null, category]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  try {
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = userResult.rows[0];

    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, category: user.category },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, category: user.category, fullname: user.fullname });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Check Gmail account existence
export const googleCheck = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(200).json({ signupRequired: true, email });
    }

    res.json({ google_verified: true, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const googleSignup = async (req, res) => {
  const { email, password, fullname, category, location } = req.body;

  if (!email || !password || !fullname || !category) {
    return res.status(400).json({ message: "Email, password, fullname, and category are required" });
  }

  try {
    const existingUser = await pool.query("SELECT 1 FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password, fullname, location, category) VALUES ($1, $2, $3, $4, $5)",
      [email, hashedPassword, fullname, location || null, category]
    );

    const token = jwt.sign({ email, category }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ token, category, fullname });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Forgot Password (send real email via OAuth2)
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // check if user exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No account with that email found." });
    }

    const user = result.rows[0];

    // create token valid for 15 min
    const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    // send email
    await sendEmail(
      email,
      "Password Reset Request",
      `<p>Hello ${user.fullname},</p>
       <p>You requested to reset your password. Click below to reset:</p>
       <a href="${resetLink}">${resetLink}</a>
       <p>This link expires in 15 minutes.</p>`
    );

    res.json({ message: "Reset email sent! Please check your inbox." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Reset Password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // hash new password
    const bcrypt = await import("bcrypt");
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // update DB
    await pool.query("UPDATE users SET password = $1 WHERE id = $2", [
      hashedPassword,
      decoded.id,
    ]);

    res.json({ message: "Password has been reset successfully!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

