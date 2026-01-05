import express from "express";
import conn from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM USERS WHERE username=? AND password=?";
  conn.query(query, [username, password], (err, result) => {
    if (err) {
      console.log("DB error ", err);
      return res.json({ status: false, message: "DB error" });
    }
    if (result.length > 0) {
      const username = result[0].username;
      const token = jwt.sign(
        {
          username: username,
        },
        process.env.JWT_TOKEN,
        { expiresIn: process.env.JWT_EXPIRE }
      );
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Invalid username or password" });
    }
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
