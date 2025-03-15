import { Component } from '@angular/core';
import { ResultService } from '../result.service';
import { QuizResults } from '../model/quiz-results';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [NgFor],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  results: QuizResults;

  constructor(private resultService: ResultService) {
    this.results = this.resultService.getResults();
  }
}
