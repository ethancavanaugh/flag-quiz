import { Component, inject } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-content',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  countryList!: Country[];
  curCountry!: Country;
  countryIdx: number = 0;

  constructor(private countryService: CountryService) {
    this.countryService.getAllCountries().subscribe(res => {
      this.countryList = res;
      this.curCountry = this.countryList.at(this.countryIdx)!;
    });
  }

  handleTyping(guess: string) {
    console.log(guess);
    if (this.curCountry.validNames.includes(guess)){
      console.log("Correct!");
      this.nextCountry();
    }
  }

  private nextCountry(){
    if (this.countryIdx >= this.countryList.length){
      this.endGame();
    }
    this.curCountry = this.countryList.at(++this.countryIdx)!
  }

  private endGame(){
    //TODO
    console.log("Game is complete");
  }

}
