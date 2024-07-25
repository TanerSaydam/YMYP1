import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { api } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  hubConnection : signalR.HubConnection | undefined;

  startConnection():Promise<void>{
    this.hubConnection = 
      new signalR.HubConnectionBuilder()
      .withUrl(`${api}/create-room`)
      .build();

      this.hubConnection.onclose(() => {
        console.log("Connection closed. Retrying...");
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });

      return this.hubConnection
      .start()
      .then(()=>{
        console.log("Connection started");
      })
      .catch((err: any)=> {
        console.log(err);
        console.log("Connection closed. Retrying...");
        setTimeout(()=> {
          this.startConnection();
        },3000);
      });    
  }
}
