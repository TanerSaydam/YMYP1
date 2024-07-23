import { Component, signal } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { Router, RouterLink } from '@angular/router';
import { FlexiToastService } from 'flexi-toast';
import { RegisterModel } from '../../models/register.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {
  model = signal<RegisterModel>(new RegisterModel());

  constructor(
    private http: HttpService,
    private toast: FlexiToastService,
    private router: Router
  ){}

  signIn(){
    this.http.post<string>("Auth/Register", this.model(), (res)=> {
      this.toast.showToast("Başarılı", res);
      this.router.navigateByUrl("/admin/login")
    });
  }
}
