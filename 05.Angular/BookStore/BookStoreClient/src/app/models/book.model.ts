export class BookModel{
    id: number = 0;
    title: string = "";
    author: string = "";
    summary: string = "";
    coverImageUrl: string = "";
    price: Money = new Money();
    quantity: number = 0;
    isActive: boolean = true;
    isDeleted: boolean = false;
    isbn: string = "";
    createAt: string = "";
    categories: string[] = [];
    shoppingCartId: number = 0;    
    raiting: number = 0;
}

export class Money{
    value: number = 0;
    currency: string = "₺";
}