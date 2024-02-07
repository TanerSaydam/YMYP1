using System.Net.Sockets;

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Models;

public sealed class Product
{
    public Product()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }      
    //public List<CategoryProduct>? CategoryProducts { get; set; }

}
