import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css'
})
export class CartSidebarComponent {
  @ViewChild("cartSidebarCloseBtn") closeBtn: ElementRef<HTMLButtonElement> | undefined;

  constructor(
    private router: Router
  ){}
  gotoCart(){
    if(this.closeBtn != undefined){
      this.closeBtn.nativeElement.click();
    }
    //const el = document.getElementById("cartSidebarCloseBtn");
    //el?.click();
    this.router.navigateByUrl("/cart");
  }
}
