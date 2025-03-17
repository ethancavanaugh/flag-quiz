import { Injectable } from '@angular/core';
import { Country } from './model/country';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizSettings } from './model/quiz-settings';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl: string = "http://localhost:8080/countries";
  settings: QuizSettings | null = null;

  constructor(private http: HttpClient) { }

  //-------------MODIFY GAME SETTINGS----------
  setSettings(settings: QuizSettings): void {
    this.settings = settings;
  }

  clearSettings(): void {
    this.settings = null;
  }

  //--------------GET COUNTRY LIST------------
  getCountries(): Observable<Country[]> {
    if (this.settings == null) {
      return this.http.get<Country[]>(this.baseUrl);
    }

    let params = new HttpParams;
    if (this.settings.continent != ""){
      params = params.set("continent", this.settings.continent);
    }
    if (this.settings.numQuestions != ""){
      params = params.set("numQuestions", this.settings.numQuestions);
    }
    console.log(params);

    return this.http.get<Country[]>(this.baseUrl, { params });
  }
}
