import { BookModel } from "./book.model"

export class PaymentModel {
    userId: number | null = 0;
    books: BookModel[] = []
    buyer: BuyerModel = new BuyerModel();
    shippingAddress: AddressModel = new AddressModel();
    billingAddress: AddressModel = new AddressModel();
    paymentCard: PaymentCardModel = new PaymentCardModel();
}

export class BuyerModel {
    id: string = "";
    name: string = "Taner";
    surname: string = "Saydam";
    identityNumber: string = "11111111111";
    email: string = "tanersaydam@gmail.com";
    gsmNumber: string = "5546548006";
    registrationDate: string = "";
    lastLoginDate: string = "";
    registrationAddress: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";
    ip: string = "";
}

export class AddressModel {
    description: string = "Kayseri";
    zipCode: string = "38070";
    contactName: string = "Taner Saydam";
    city: string = "Kayseri";
    country: string = "Türkiye";
}

export class PaymentCardModel {
    cardHolderName: string = "Taner Saydam  ";
    cardNumber: string = "";
    expireYear: string = "";
    expireMonth: string = "";
    cvc: string = "377";
}