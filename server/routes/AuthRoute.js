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
      const id = result[0].id;
      const username = result[0].username;
      const token = jwt.sign(
        {
          id: id,
          username: username,
        },
        process.env.JWT_SECRETKEY,
        { expiresIn: process.env.JWT_EXPIRES }
      );
      return res.json({
        status: true,
        message: "Login successful",
        token: token,
      });
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
    if (result)
      return res
        .status(201)
        .json({ status: true, message: "Register success" });
    else return res.json({ status: false });
  });
});

export { router as authRouter };
