using System.Security.AccessControl;

namespace ClassYapilariApp.WebAPI.Models;

public class Product
{
    public Product(string name, int quantity,decimal price)
    {
        Id = Guid.NewGuid();
        Name = name;
        Quantity = quantity;
        Price = price;
    }
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}
