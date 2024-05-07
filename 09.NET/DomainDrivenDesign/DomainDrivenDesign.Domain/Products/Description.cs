namespace DomainDrivenDesign.Domain.Products;

public sealed record Description
{
    public Description(string value)
    {
        if (string.IsNullOrEmpty(value))
        {
            throw new ArgumentException("Açıklama alanı boş olamaz");
        }

        if (value.Length < 3)
        {
            throw new ArgumentException("Açıklama alanı en az 3 karakter olmalıdır");
        }

        Value = value;
    }
    public string Value { get; init; }
}