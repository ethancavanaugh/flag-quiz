import { Injectable } from '@angular/core';
import { Country } from './model/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizSettings } from './model/quiz-settings';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl: string = "http://localhost:8080/";
  settings: QuizSettings | null = null;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + "countries");
  }

  getCountriesWithSettings(): Observable<Country[]> {
    if (this.settings == null){
      return this.getAllCountries();
    }

    return this.http.get<Country[]>(this.baseUrl + `countries?continent=${this.settings.continent}`)
  }

  setSettings(settings: QuizSettings): void {
    this.settings = settings;
  }

  clearSettings(): void {
    this.settings = null;
  }
}
