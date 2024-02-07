namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Models;

public sealed class Category
{
    public Category()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; } 
    public string Name { get; set; } =string.Empty;   
    public string? Description { get; set; }
    //public List<CategoryProduct>? CategoryProducts { get; set; }
}
