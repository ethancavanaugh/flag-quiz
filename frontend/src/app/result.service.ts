import { Injectable } from '@angular/core';
import { QuizResults } from './model/quiz-results';
import { Answer } from './model/answer';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  results: QuizResults;

  constructor() { 
    this.results = {
      numQuestions: 0, 
      numCorrect: 0,
      answers: []
    }
  }

  addAnswer(ans: Answer) {
    this.results.numQuestions++;
    if (ans.correct){ 
      this.results.numCorrect++;
    }
    this.results.answers.push(ans);
  }

  getResults(): QuizResults {
    return this.results;
  }

  clearResults(): void {
    this.results = {
      numQuestions: 0, 
      numCorrect: 0,
      answers: []
    }
  }
}
