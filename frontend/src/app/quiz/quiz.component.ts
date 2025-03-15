import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Country } from '../country';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.getCountriesWithSettings().subscribe(res => {
      this.countryList = res;
      this.countryList = this.countryList.slice(0, 3); //TESTING ONLY

      this.curCountry = this.countryList.at(this.countryIdx)!;
    });
  }

  handleTyping(): void {
    console.log(this.curGuess);
    if (this.curCountry.validNames.includes(this.curGuess.toLowerCase())){
      console.log("Correct!");
      this.nextCountry();
    }
  }

  private nextCountry(): void {
    this.curGuess = "";

    if (++this.countryIdx >= this.countryList.length){
      this.endGame();
    } else {
      this.curCountry = this.countryList.at(this.countryIdx)!
    }
  }

  private endGame(): void {
    this.quizService.clearSettings();
    this.router.navigate(['/result']);
  }
}
