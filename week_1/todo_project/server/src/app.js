import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import { todoRouter } from "./routes/todo.routes.js";
dotenv.config();

app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credential: true,
  })
);

app.get("/v1/api/", (req, res) => {
  res.send("hello form backend");
});

app.use("/v1/api", todoRouter);

export { app };
