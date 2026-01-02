import express from "express";
import conn from "../utils/db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM USERS WHERE username=? AND password=?";
  conn.query(query, [username, password], (err, result) => {
    if (err) {
      console.log("DB error", err);
      return res.json({ status: false, message: "DB error" });
    }
    if (result.length == 0) {
      return res.status(401).json({ status: false, message: "No User found" });
    }
    return res.json({ status: true, message: "Login success" });
  });
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO users (username,password) VALUES (?,?)";
  conn.query(query, [username, password], (err, result) => {
    if (err) {
      console.log("DB error", err);
      return res.json({ message: "DB error" });
    }
    return res.status(201).json({ message: "Register success" });
  });
});

export { router as authRouter };
