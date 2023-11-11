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

  showName2InConsole(){
    this.name2 = this.name;
    console.log(this.name2);
  }
}
