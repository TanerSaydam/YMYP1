import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PaymentModel } from '../models/payment.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './auth.service';
import { SetShoppingCartsModel } from '../models/set-shopping-carts.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: any[] = [];
  prices: { value: number, currency: string }[] = [];
  count: number = 0;
  total: number = 0;
  isLoading: boolean = false;

  constructor(
    private swal: SwalService,
    private translate: TranslateService,
    private http: HttpClient,
    private auth: AuthService,
    private error: ErrorService,
    private spinner: NgxSpinnerService
  ) {
    this.getAllShoppingCarts();
  }

  changeBookQuantityInShoppingCart(bookId: number, quantity: number){
    if(localStorage.getItem("response")){
      this.http.get(`https://localhost:7082/api/ShoppingCarts/ChangeBookQuantityInShoppingCart/${bookId}/${quantity}`)
      .subscribe({
        next: (res:any)=> {
          this.getAllShoppingCarts();
        },
        error: (err:HttpErrorResponse)=> {
          this.error.errorHandler(err);
        }
      })
    }else{
      if(quantity <= 0){
        const index = this.shoppingCarts.findIndex(p=> p.id == bookId);
        this.removeByIndex(index);
      }else{
        this.http.get(`https://localhost:7082/api/ShoppingCarts/CheckBookQuantityIsAvailable/${bookId}/${quantity}`).subscribe({
          next: (res:any)=> {
            this.shoppingCarts.filter(p=> p.id === bookId)[0].quantity = quantity;
          },
          error: (err: HttpErrorResponse)=> {
            this.error.errorHandler(err);
          }
        })       
      }      
    }
    
  }

  getAllShoppingCarts(){
    const shoppingCartsString = localStorage.getItem("shoppingCarts");
    if (shoppingCartsString) {
      const carts: string | null = localStorage.getItem("shoppingCarts")
      if (carts !== null) {
        this.shoppingCarts = JSON.parse(carts);
        this.calcTotal();
      }
    }else{
      this.shoppingCarts = [];
    }

    if(localStorage.getItem("response")){
      this.http.get<SetShoppingCartsModel[]>("https://localhost:7082/api/ShoppingCarts/GetAll/" + this.auth.userId,).subscribe({
        next: (res: any)=> {
          this.shoppingCarts =  res
        this.calcTotal();
        },
        error: (err: HttpErrorResponse)=> {
          this.error.errorHandler(err);
        }
      });
    }

    this.calcTotal();
  }

  calcTotal() {
    this.count = this.shoppingCarts.length;
    this.total = 0;

    const sumMap = new Map<string, number>();

    this.prices = [];
    for (let s of this.shoppingCarts) {
      const newPrice = {value: (s.price.value * s.quantity), currency: s.price.currency};
      this.prices.push({ ...newPrice });
    }

    for (const item of this.prices) {
      const currentSum = sumMap.get(item.currency) || 0;
      sumMap.set(item.currency, currentSum + item.value);
    }

    this.prices = [];
    for (const [currency, sum] of sumMap) {
      this.prices.push({ value: sum, currency: currency });
    }

  }

  removeByIndex(index: number) {

    forkJoin({
      doYouWantToDeleted: this.translate.get("remove.doYouWantToDeleted"),
      cancelBtn: this.translate.get("remove.cancelBtn"),
      confirmBtn: this.translate.get("remove.confirmBtn")
    }).subscribe(res => {
      this.swal.callSwal(res.doYouWantToDeleted, res.cancelBtn, res.confirmBtn, () => {
        if(localStorage.getItem("response")){
          this.http.get("https://localhost:7082/api/ShoppingCarts/RemoveById/" + this.shoppingCarts[index]?.shoppingCartId).subscribe(res=> {

            this.getAllShoppingCarts();
          });
        }else{
          this.shoppingCarts.splice(index, 1);
          localStorage.setItem("shoppingCarts", JSON.stringify(this.shoppingCarts));
          this.count = this.shoppingCarts.length;
          this.calcTotal();
        }
       
      });
    })

  }

  payment(data:PaymentModel, callBack: (res: any)=> void){
    this.spinner.show();
    this.http.post("https://localhost:7082/api/ShoppingCarts/Payment", data)
    .subscribe({
      next: (res:any)=> { 
        callBack(res);
        this.spinner.hide();
      },
      error: (err: HttpErrorResponse)=> {
        this.error.errorHandler(err);
        this.spinner.hide();
      }
    })
  }
}
