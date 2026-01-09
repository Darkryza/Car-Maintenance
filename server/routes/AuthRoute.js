import express from "express";
import conn from "../utils/db.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import verifyToken from "../middleware/verifyToken.js";

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

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 1000 * 60 * 60,
        });

        return res.json({
          status: true,
          message: "Login successful",
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

router.get("/dashboard", verifyToken, (req, res) => {
  try {
    const { id, username } = req.user;
    const query = "SELECT * FROM users WHERE id=?";
    conn.query(query, [id], (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ status: false, message: "Error on server side" });
      }
      if (result.length === 0) {
        return res.json({ status: false, message: "User not found" });
      }
      if (result.length > 0) {
        const user = result[0];
        return res.json({
          status: true,
          message: "User authorized by server",
          user: { id: id, username: username },
        });
      }
    });
  } catch (err) {
    return res.json({ status: false, message: "Error on server side" });
  }
});

export { router as authRouter };
