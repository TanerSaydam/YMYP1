import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  messages: string[] = [];

  constructor() { }

  hubConnection: signalR.HubConnection | any;

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7075/chat-hub")
      .build();

    return this.hubConnection
      .start()
      .then(() => {
        console.log("Connection started");
        this.getMessage();
      })
      .catch((err: any) => console.log(err));
  }


  getMessage() {
    this.hubConnection.on("ReceiveMessage", (res: any) => {      
      this.messages.push(res);
    });
  }
}
