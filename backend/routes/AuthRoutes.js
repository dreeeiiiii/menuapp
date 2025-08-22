import express from "express";
import {
  signup,
  login,
  googleCheck,
  googleSignup,
  forgotPassword,
  resetPassword,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google-check", googleCheck);
router.post("/google-signup", googleSignup);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
