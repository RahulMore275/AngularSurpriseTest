import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  CountryList:any = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList() {
    this.countryService.getCountryList().subscribe(
      (data) => {
        this.CountryList = data as any[];
        console.log('Country data', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
