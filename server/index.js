import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/AuthRoute.js";
import { serviceRouter } from "./routes/ServiceRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.static("public"));

// routes
app.use("/auth", authRouter);
app.use("/services", serviceRouter);

// start server
const port = process.env.PORT || 5484;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
