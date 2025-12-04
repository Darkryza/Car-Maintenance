import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(process.env.port, () => {
  console.log(`Listen to port ${process.env.port}`);
});
