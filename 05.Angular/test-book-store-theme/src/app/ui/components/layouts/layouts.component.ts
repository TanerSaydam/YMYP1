import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccountSidebarMobileComponent } from './account-sidebar-mobile/account-sidebar-mobile.component';
import { AccountSidebarDesktopComponent } from './account-sidebar-desktop/account-sidebar-desktop.component';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';
import { CategoriesSidebarComponent } from './categories-sidebar/categories-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    AccountSidebarMobileComponent, 
    AccountSidebarDesktopComponent, 
    CartSidebarComponent,
    CategoriesSidebarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
