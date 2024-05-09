namespace DomainDrivenDesign.Domain.Users;

public sealed record Password
{
    public string Value { get; init; }
    public Password(string value)
    {
        if(value.Length < 6)
        {
            throw new ArgumentException("Password must be at lesst 6 characters");
        }

        Value = value;
    }
}
