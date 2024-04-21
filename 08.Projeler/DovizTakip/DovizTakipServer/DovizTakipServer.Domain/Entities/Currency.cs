using DovizTakipServer.Domain.Enums;

namespace DovizTakipServer.Domain.Entities;
public sealed class Currency
{
    public Guid Id { get; private set; }
    private Currency()
    {
        Id = Guid.NewGuid();
    }
    public decimal Amount { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public CurrencyTypeEnum Type { get; private set; } = CurrencyTypeEnum.USD;

    public static Currency Create(decimal amount, int typeValue)
    {
        Currency currency = new Currency()
        {
            Amount = amount,
            Type = CurrencyTypeEnum.FromValue(typeValue),
            CreatedAt = DateTime.Now
        };

        return currency;
    }
}
