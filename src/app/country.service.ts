import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountryList() {
    console.log('start getCountryList()');
    const url = 'https://localhost:44399/api/SharedComponents/GetCountryList';
    return this.http.get(url);
  }
}
