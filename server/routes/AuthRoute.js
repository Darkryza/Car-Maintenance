import express from "express";
import conn from "../utils/db.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username=?";
  conn.query(query, [username], (err, result) => {
    if (err) {
      console.log("DB error ", err);
      return res.json({ status: false, message: "DB error" });
    }
    if (result.length > 0) {
      const user = result[0];
      bycrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log(err);
          return res.json({ status: false, message: "Error on server side" });
        }
        if (!isMatch) {
          return res.json({
            status: false,
            message: "Username or Password is incorrect",
          });
        }
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
          },
          process.env.JWT_SECRETKEY,
          { expiresIn: process.env.JWT_EXPIRES }
        );
        return res.json({
          status: true,
          message: "Login successful",
          token: token,
        });
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
  bycrypt.hash(password, 10, (err, hashed) => {
    if (err) {
      console.log(err);
      return res.json({ status: false, message: "Error on server side" });
    }
    conn.query(query, [username, hashed], (err, result) => {
      if (err) {
        console.log("DB error ", err);
        return res.json({ status: false, message: "DB error" });
      }
      if (result)
        return res
          .status(201)
          .json({ status: true, message: "Register success" });
      else return res.json({ status: false });
    });
  });
});

export { router as authRouter };
