import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5484;

app.get("/", (req, res) => {
  res.send("Hi from server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
