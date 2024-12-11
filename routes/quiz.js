import express from "express";
const router = express.Router();

import { createQuiz, getQuiz } from "../controllers/quiz.js";

router.post("/add", createQuiz);
router.get("/", getQuiz);
export default router;
