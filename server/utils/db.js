import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.connect((err) => {
  if (err) {
    console.log(`DB Connection failed: ${err}`);
    return;
  }
  console.log("DB connected");
});

export default conn;
