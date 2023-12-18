import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { TicketDetailModel, TicketModel } from '../../models/ticket.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, FormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export default class DetailComponent {
  details: TicketDetailModel[] = [];
  content: string = "";
  ticketId: string = "";
  ticket: TicketModel = new TicketModel();
  constructor(
    public auth: AuthService,
    private http: HttpService,
    private activated: ActivatedRoute
  ){
    this.activated.params.subscribe((res)=> {
      this.ticketId = res["value"];
      this.getDetail();
      this.getTicket();
    })
  }

  getTicket(){
    this.http.get(`Tickets/GetById?ticketId=${this.ticketId}`,(res)=> {
      this.ticket = res;
    });
  }

  getDetail(){
    this.http.get(`Tickets/GetDetails/${this.ticketId}`,(res)=> {
      this.details = res;
    });
  }

  addDetailContent(){
    const data = {
      appUserId: this.auth.token.userId,
      content: this.content,
      ticketId: this.ticketId
    }

    this.http.post(`Tickets/AddDetailContent`, data, ()=> {
      this.content = "";
      this.getDetail();
      this.getTicket();
    })
  }

  closeTicket(){
    this.http.get(`Tickets/CloseTicketByTicketId?ticketId=${this.ticket.id}`,()=> {
      this.getTicket();
    });
  }
}
