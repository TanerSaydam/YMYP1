import { OrderDetailModel } from "./order.detail.model";

export class OrderModel{
    id: string = ""
    date: string = "";
    number: string  ="";
    totalCount: number = 0;
    details: OrderDetailModel[] = [];
}



export const FakeOrders: OrderModel[] = [
    {
        id: "1",
        date: "01.01.2024",
        number: "SP00000000000001",
        totalCount: 3,
        details: [
            {
                id: "1",
                orderId: "1",
                productName: "Domates",
                quantity: 10,
                incomingCount: 0
            },
            {
                id: "2",
                orderId: "1",
                productName: "Salatalık",
                quantity: 25,
                incomingCount: 0
            },
            {
                id: "3",
                orderId: "1",
                productName: "Muz",
                quantity: 5,
                incomingCount: 0
            }
        ]
    },
    {
        id: "2",
        date: "02.01.2024",
        number: "SP00000000000002",
        totalCount: 2,
        details: [
            {
                id: "1",
                orderId: "1",
                productName: "Sarımsak",
                quantity: 3,
                incomingCount: 0
            },
            {
                id: "2",
                orderId: "1",
                productName: "Yeşil Yaprak",
                quantity: 125,
                incomingCount: 0
            }
        ]
    }
]