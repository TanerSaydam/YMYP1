import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = "";
  constructor(private router: Router) { } 

  isAuthenticated(){
    const responseString:string | null = localStorage.getItem("response");
    if(responseString != null){
      try {
        this.token = responseString;
        const decode = jwtDecode(responseString);

        const now:number = new Date().getTime()/1000;
        const exp: number | undefined = decode.exp;


        if(exp == undefined){
          this.router.navigateByUrl("/login");
          return false;            
        }

        if(exp < now){
          this.router.navigateByUrl("/login");
          return false;  
        }  

        return true;
        
      } catch (error) {
        console.warn(error); 
        this.router.navigateByUrl("/login");
        return false;  
      }      
    }else{
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
