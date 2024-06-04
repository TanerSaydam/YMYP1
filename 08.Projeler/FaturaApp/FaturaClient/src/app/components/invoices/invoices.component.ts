import { Component } from '@angular/core';
import { InvoiceModel } from '../../models/invoice.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderModel, FakeOrders } from '../../models/order.model';
import { OrderDetailModel } from '../../models/order.detail.model';
import { InvoiceDetailModel } from '../../models/invoice-detail.model';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  invoices:  InvoiceModel[] = [];
  invoice: InvoiceModel = new InvoiceModel();

  orders: OrderModel[] = FakeOrders;
  orderDetails: OrderDetailModel[] = [];


  showOrderDetail(index: number){
    this.orderDetails = [...this.orders[index].details];
  }

  addInvoiceDetail(){
    for(let data of this.orderDetails.filter(p=> p.incomingCount > 0)){
      const detail: InvoiceDetailModel = new InvoiceDetailModel();
      const order = this.orders.find(p=> p.id == data.orderId);
      detail.orderNumber = order!.number;
      detail.productName = data.productName;
      detail.quantity = data.incomingCount;
      detail.orderDetailId = data.id;

      this.invoice.details.push(detail);

      data.quantity -= data.incomingCount;
      data.incomingCount = 0;
    }
  }
}
