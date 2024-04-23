import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  hub: signalR.HubConnection | undefined;
  
  constructor() { }

  startConnection(callBack: ()=> void) {
    this.hub = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7054/takip-hub")
      .build();

    this.hub
      .start()
      .then(() => {
        console.log("Connection started");  
        
        callBack();
      })
      .catch((err: any) => console.log(err));
  }
}
