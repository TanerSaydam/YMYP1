import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
  <h1>SignalR Application</h1>
  @if(!showChat){
    <div>
    <input type="text" [(ngModel)]="name" placeholder="Adınız...">
    <button (click)="startConnection()">Sohbete Başla</button>
  </div>
  }@else {
    <div>
    <input [(ngModel)]="message" placeholder="Mesajınız...">
    <button (click)="send()">Gönder</button>
    <hr>
    <div style="float:left;">
      <p>Mesajlar</p>
      <ul>
        @for(chat of chats; track chat){
          <li><b>{{chat.name}}</b>: {{chat.message}}</li>
        }
      </ul>
    </div>

    <div style="float: right;">
      <p>Sohbetteki kişiler</p>
      <ul>
        @for(user of users; track user){
          <li>{{user}}</li>
        }
      </ul>
    </div>
  </div>
  } 
  

  `
})
export class AppComponent {
  chats: { name: string, message: string }[] = [];
  message: string = "";
  name: string = "";
  users:string[] = [];
  showChat: boolean = false;

  hub: signalR.HubConnection | undefined;

  constructor(private http: HttpClient) {}

  send() {
    this.http
      .get(`https://localhost:7047/api/Values/Send?name=${this.name}&message=${this.message}`)
      .subscribe(() => this.message = "");
  }

  startConnection() {
    this.hub = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7047/chat-hub")
      .build();

    this.hub
      .start()
      .then(() => {
        this.showChat = true;
        console.log("Connection started");

        this.hub?.invoke("Join", this.name);

        this.hub?.on("users", (res:any[])=> {
          this.users = res
        });

        this.hub?.on("receive", (res: any) => {          
          this.chats.push(res);
        })
      })
      .catch((err: any) => console.log(err));
  }
}
