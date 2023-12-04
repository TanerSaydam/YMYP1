import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router, RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterOutlet,InputTextModule,
  ButtonModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    public auth: AuthService,
    private router: Router
  ){}

  ngOnInit() {
      this.items = [
          {
              label: 'Ana Sayfa',
              icon: 'pi pi-fw pi-home',
              routerLink: "/"
          }
      ];
  }

  logout(){
    localStorage.removeItem("response");
    location.href = "/login";
  }
}

