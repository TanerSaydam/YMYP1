import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpService } from '../../../common/services/http.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  constructor(
    private router: Router,
    public http: HttpService
  ){}

  logout(){
    localStorage.removeItem("my-token");
    this.router.navigateByUrl("/admin/login");
  }
}
