namespace EntityFrameworkCoreGrup2.eCommerce.WebAPI.Models;

public sealed class Category
{
    public Category()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
