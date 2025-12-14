import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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
  console.log("DB connected");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
});
