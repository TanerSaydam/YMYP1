import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginResponseModel } from '../models/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: LoginResponseModel = new LoginResponseModel();

  constructor(
    private router: Router
  ) { }

  isAuthenticated(){
    const tokenString: string | null = localStorage.getItem("token");
    if(tokenString === null){
      this.router.navigateByUrl("/login");
      return false;
    }

    const decode:any = jwtDecode(tokenString);
    this.user.userId = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    this.user.email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    this.user.name = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    this.user.userName = decode["UserName"];
    this.user.userType = decode["UserType"];

    return true;
  }
}
