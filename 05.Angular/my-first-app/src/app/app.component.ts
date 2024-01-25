import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Taner Saydam";
  name2: string = "";
  names:string[] = ["Taner","Yusuf","Akın","Atif"]

  constructor(private http: HttpClient){

  }

  add(){
    const data = {
      "id": 0,
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "avatar": "string"
    };

    this.http.post("https://localhost:7147/api/Personels/Add", data)
    .subscribe(res=> {
      console.log(res);      
    });
  }

  showName2InConsole(){
    this.name2 = this.name;
    console.log(this.name2);
  }
}
