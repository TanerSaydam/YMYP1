using SmartEnum.ConsoleApp.Enums;

//CreditCard creditCardValue = CreditCard.Platinum;

//var discound = creditCardValue switch
//{
//    CreditCard.Standard => 0.01,
//    CreditCard.Platinum => 0.10,
//    CreditCard.Premium => 0.20,
//    CreditCard.Gold => 0.30,
//    _ => throw new NotImplementedException()
//};

//CreditCard2 creditCardValue = CreditCard2.FromValue(2);
//var discound = creditCardValue.GetDiscountRate();

//Console.WriteLine($"Credit card type: {creditCardValue} discound: {discound}");

CreditCard3? creditCard3 = CreditCard3.FromValue("Taner 1");

Console.WriteLine(creditCard3.Name);