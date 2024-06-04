import { InvoiceDetailModel } from "./invoice-detail.model";

export class InvoiceModel{
    id: string = "";
    date: string = "";
    number: string  ="";
    customer: string = "";
    total: number = 0;
    details: InvoiceDetailModel[] = [];
}
