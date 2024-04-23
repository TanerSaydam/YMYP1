export class CurrencyModel{
    amount: number = 0;
    createdAt: Date = new Date();
    id: string = "";
    type: CurrencyTypeModel = new CurrencyTypeModel();
}

export class CurrencyTypeModel{
    name: string = "";
    value: number = 0;
}