import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  questionNumber: {
    type: String,
    require: true,
    default: "1",
  },
  timer: {
    type: String,
    require: true,
    default: "30",
  },
  progressBar: {
    type: String,
    require: true,
    default: "red",
  },
  questionText: {
    type: String,
    require: true,
    default: "Enter your question here",
  },
  image: {
    type: String,
    default: "https://unsplash.com/photos/iJnZwLBOB1I",
  },
  options: [
    {
      text: {
        type: String,
        require: true,
        default: "Option text",
      },
      isCorrect: {
        type: Boolean,
        require: true,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const QuizModal = mongoose.model("Quiz", quizSchema);

export default QuizModal;
