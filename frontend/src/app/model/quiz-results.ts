import { Answer } from "./answer";

export interface QuizResults {
  numQuestions: number,
  numCorrect: number,
  answers: Answer[]
}