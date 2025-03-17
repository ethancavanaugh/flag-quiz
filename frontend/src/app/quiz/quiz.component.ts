import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Country } from '../model/country';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultService } from '../result.service';

@Component({
  selector: 'quiz-content',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {
  countryList!: Country[];
  curCountry!: Country;
  countryIdx: number = 0;
  curGuess: string = "";

  constructor(private quizService: QuizService, private resultService: ResultService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.getCountries().subscribe(res => {
      this.countryList = res;

      this.nextQuestion();
    });
  }

  checkAnswer(): void {
    if (this.curCountry.validNames.includes(this.curGuess.toLowerCase())){
      this.resultService.addAnswer({
        countryId: this.curCountry.id,
        correct: true
      })

      this.nextQuestion();
    }
  }

  private nextQuestion(): void {
    this.curGuess = "";

    if (this.countryIdx >= this.countryList.length){
      this.endGame();
    } else {
      this.curCountry = this.countryList[this.countryIdx++]
    }
  }

  private endGame(): void {
    this.quizService.clearSettings();
    this.router.navigate(['/result']);
  }
}
