namespace DomainDrivenDesign.Domain.Products;

public sealed class Product
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
