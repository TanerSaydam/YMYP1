import { BookModel, Money } from "./book.model";
import { OrderStatusModel } from "./order-status-model";

export class OrderModel{
    id: number = 0;
    orderNumber: string = "";
    book: BookModel = new BookModel();
    quantity: number = 0;
    price: Money = new Money();
    createdAt: string = ""; 
    paymentDate: string  = "";
    paymentType:string = "";
    paymentNumber:string = "";
    orderStatuses: OrderStatusModel[] = [];
    comment: string = "";
    raiting: number = 0;
  }