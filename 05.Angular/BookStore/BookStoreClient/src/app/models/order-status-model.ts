import { OrderStatusEnum } from "./order-status-enum";

export class OrderStatusModel{
    id: number = 0;
    orderNumber: string = "";
    status:OrderStatusEnum = OrderStatusEnum.AwaitingApproval;
    statusDate: string = "";
  }
  