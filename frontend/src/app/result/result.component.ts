import { Component } from '@angular/core';
import { ResultService } from '../result.service';
import { QuizResults } from '../model/quiz-results';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  results: QuizResults;

  constructor(private resultService: ResultService) {
    this.results = this.resultService.getResults();
  }
}
