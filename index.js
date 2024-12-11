import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import quizRouter from "./routes/quiz.js";
import dotenv from "dotenv";

const port = process.env.PORT || 8000;

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/quiz", quizRouter);
app.get("/", (req, res) => {
  res.send("Welcome to chaabi backend");
});

const mongo = process.env.MONGODB_URL;

mongoose
  .connect(mongo)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
