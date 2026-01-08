import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./routes/AuthRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5484;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.use("/auth", authRouter);
