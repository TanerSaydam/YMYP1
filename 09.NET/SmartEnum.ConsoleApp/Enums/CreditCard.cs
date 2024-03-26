using Ardalis.SmartEnum;

namespace SmartEnum.ConsoleApp.Enums;
public enum CreditCard
{
    Standard = 1,
    Platinum,
    Premium,
    Gold
}


public sealed class CreditCard2 : SmartEnum<CreditCard2>
{
    public static readonly CreditCard2 Standard = new("Standard", 0);
    public static readonly CreditCard2 Platinum = new("Platinum", 1);
    public static readonly CreditCard2 Premium = new("Premium", 2);
    public CreditCard2(string name, int value) : base(name, value)
    {

    }

    public double GetDiscountRate()
    {
        return this switch
        {
            var cc when cc == Standard => 0.01,
            var cc when cc == Platinum => 0.10,
            var cc when cc == Premium => 0.20,
            _ => throw new ArgumentException()
        };
    }
}

public sealed class CreditCard3 : Enumeration<CreditCard3>
{
    public static readonly CreditCard3 Standard = new("Taner 1", nameof(Standard));
    public static readonly CreditCard3 Platinum = new("Taner 2", nameof(Platinum));
    public static readonly CreditCard3 Premium = new("Taner 3", nameof(Premium));
    public CreditCard3(string value, string name) : base(value, name)
    {
    }
}
