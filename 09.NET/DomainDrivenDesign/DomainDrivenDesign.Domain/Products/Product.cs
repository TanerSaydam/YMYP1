using DomainDrivenDesign.Domain.Abstractions;
using DomainDrivenDesign.Domain.Categories;
using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Products;

public sealed class Product : Entity
{
    public Product(Name name, Description description, Money money, Guid categoryId)
    {
        //ekstra kontroller        

        Name = name;
        Description = description;
        Price = money;
        CategoryId = categoryId;
    }
    public Name Name { get; private set; }
    public Description Description { get; private set; }
    public Money Price { get; private set; }
    public Guid CategoryId { get; private set; }
    public Category? Category { get; private set; }

    public void ChangeName(string name)
    {
        Name = new(name);
    }
}
