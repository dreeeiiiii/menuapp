import pool from "../db.js";

// Get all menu items
export const getMenu = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new menu item
export const addMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const result = await pool.query(
      "INSERT INTO menu (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
