import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalrService } from './services/signalr.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message: string = "";

  constructor(private http: HttpClient,
    public signalR: SignalrService) {
    this.signalR.startConnection();   
  }

  ngOnInit() {
  }

  send() {
    this.http.get("https://localhost:7075/api/Values/Send?message=" + this.message).subscribe();
  }

  
}
