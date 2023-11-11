import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = "";
  userId:number | null = 0;
  userName: string = "";

  constructor() { }

  isAuthentication(){
    const responseString = localStorage.getItem("response");
    if(responseString){
      const responseJson = JSON.parse(responseString);
      this.token = responseJson.token;
      this.userId = responseJson.userId;
      this.userName = responseJson.userName;
      return true;
    }else{
      this.userId = null;
    }

    return false;
  }
}
