using DomainDrivenDesign.Domain.Abstractions;
using DomainDrivenDesign.Domain.Products;
using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Categories;

public sealed class Category : Entity
{
    public Name Name { get; private set; }
    public ICollection<Product>? Products { get; private set; }
    public Category(string name)
    {
        Name = new(name);
    }
}
