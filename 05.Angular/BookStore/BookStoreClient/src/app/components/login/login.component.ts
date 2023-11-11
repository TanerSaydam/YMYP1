import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Money } from 'src/app/models/book.model';
import { SetShoppingCartsModel } from 'src/app/models/set-shopping-carts.model';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, RouterLink, TranslateModule]
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private router:Router,
    private auth: AuthService,
    private shoppingCart: ShoppingCartService
  ){

  }

  signIn(form: NgForm){
    if(form.valid){
      this.http.post(
        "https://localhost:7082/api/Auth/Login",
        {
          usernameOrEmail: form.controls["usernameOrEmail"].value, 
          password: form.controls["password"].value
        })
      .subscribe((res:any)=> {
        localStorage.setItem("response",JSON.stringify(res));
        this.auth.isAuthentication();
        
        const request:SetShoppingCartsModel[] = [];

        if(this.shoppingCart.shoppingCarts.length > 0){
          for(let s of this.shoppingCart.shoppingCarts){
            const cart = new SetShoppingCartsModel();
            cart.bookId = s.id;
            cart.userId = this.auth.userId;
            cart.price = s.price;
            cart.quantity = 1;
            
            request.push(cart);
          }
  
          this.http.post("https://localhost:7082/api/ShoppingCarts/SetShoppingCartsFromLocalStorage", request).subscribe(res=> {
          localStorage.removeItem("shoppingCarts");
          this.shoppingCart.getAllShoppingCarts();
          });
        }

        
       
        this.router.navigateByUrl("/");
      })
    }
  }
}
