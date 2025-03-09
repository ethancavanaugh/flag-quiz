import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl: string = "http://localhost:8080/"
  testCountries: Country[] = [
    {
      id: 1,
      flagUrl: "https://flagsapi.com/US/flat/64.png",
      validNames: ["USA", "America", "United States"]
    },
    {
      id: 2,
      flagUrl: "https://flagsapi.com/CA/flat/64.png",
      validNames: ["Canada"]
    }
  ];

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + "countries");
  }
}
