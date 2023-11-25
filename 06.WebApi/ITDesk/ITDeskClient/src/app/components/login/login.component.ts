import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    CardModule, 
    ButtonModule, 
    InputTextModule, 
    PasswordModule, 
    FormsModule, 
    DividerModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  userNameOrEmail: string = "";
  password: string = "";

  constructor(private message: MessageService){}

  signIn(){
    if(this.userNameOrEmail.length < 3){
      this.message.add({ severity: 'warn', summary: 'Validasyon Hatası!', detail: 'Geçerli bir kullanıcı adı ya da mail adresi girin'});
      return;
    }

    if(this.password.length < 6){
      this.message.add({ severity: 'warn', summary: 'Validasyon Hatası!', detail: 'Şifreniz en az 6 karakter olmalıdır'});
      return;
    }
  }
}
