import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./layout.component.html"
})
export class LayoutComponent {
constructor(
  private router: Router
){}

logout(){
  localStorage.clear();
  this.router.navigateByUrl("/login");
}
}
