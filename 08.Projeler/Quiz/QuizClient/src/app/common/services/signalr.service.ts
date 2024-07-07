import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  hubConnection : signalR.HubConnection | undefined;

  startConnection():Promise<void>{
    this.hubConnection = 
      new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7076/create-room")
      .build();

      return this.hubConnection
      .start()
      .then(()=>console.log("Connection started"))
      .catch((err: any)=> console.log(err));    
  }
}
