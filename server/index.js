import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const app = express();
const port = process.env.PORT || 5484;

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carmaintenance",
});

conn.connect((err) => {
  if (err) {
    console.log(`DB Connection failed: ${err}`);
    return;
  }

  console.log("DB Connected");

  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});
