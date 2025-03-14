import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'quiz-content',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  countryList!: Country[];
  curCountry!: Country;
  countryIdx: number = 0;
  curGuess: string = "";

  constructor(private countryService: CountryService) {
    this.countryService.getAllCountries().subscribe(res => {
      this.countryList = res;
      this.countryList = this.countryList.slice(0, 3); //TESTING ONLY

      this.curCountry = this.countryList.at(this.countryIdx)!;
    });
  }

  handleTyping() {
    console.log(this.curGuess);
    if (this.curCountry.validNames.includes(this.curGuess.toLowerCase())){
      console.log("Correct!");
      this.nextCountry();
    }
  }

  private nextCountry(){
    this.curGuess = "";

    if (++this.countryIdx >= this.countryList.length){
      this.endGame();
    } else {
      this.curCountry = this.countryList.at(this.countryIdx)!
    }
  }

  private endGame(){
    //TODO
    console.log("Game is complete");
  }

}
