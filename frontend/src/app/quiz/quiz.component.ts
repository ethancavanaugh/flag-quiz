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
  countryList: Country[] = []

  constructor(private countryService: CountryService) {
    this.countryService.getAllCountries().subscribe(res => {
      this.countryList = res;
    });
  }

}
