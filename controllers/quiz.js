import QuizModal from "../models/quiz.js";

export const createQuiz = async (req, res) => {
  const quiz = req.body;
  const newQuiz = new QuizModal({
    ...quiz,
    createdAt: new Date().toISOString(),
  });

  try {
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const quiz = await QuizModal.find();
    res.json({
      data: quiz,
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
