using Ardalis.SmartEnum;

namespace DovizTakipServer.Domain.Enums;
public sealed class CurrencyTypeEnum : SmartEnum<CurrencyTypeEnum>
{    
    public static readonly CurrencyTypeEnum USD = new("USD", 1);
    public static readonly CurrencyTypeEnum EUR = new("EURO", 2);
    public CurrencyTypeEnum(string name, int value) : base(name, value)
    {
    }
}
