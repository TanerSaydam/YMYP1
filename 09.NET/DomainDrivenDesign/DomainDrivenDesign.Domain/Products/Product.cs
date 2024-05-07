using DomainDrivenDesign.Domain.Abstractions;

namespace DomainDrivenDesign.Domain.Products;

public sealed class Product : Entity
{
    public Product(Name name, Description description, Money money)
    {
        //ekstra kontroller        

        Name = name;
        Description = description;
        Price = money;
    }
    public Name Name { get; private set; }
    public Description Description { get; private set; }
    public Money Price { get; private set; }

    public void ChangeName(string name)
    {
        Name = new(name);
    }
}

public interface IProductRepository
{
    Task CreateAsync(CreateProductDto request, CancellationToken cancellationToken = default);
    Task<List<Product>> GetAllAsync(CancellationToken cancellationToken = default);
}
