import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }
  registerToggle() {
    this.registerMode = true;
  }

  getValues() {
    return this.http.get('https://localhost:44370/WeatherForecast/aa').subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.log(error);
      });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
