namespace EntityFrameworkCore.Transaction.WebApi.Models;

public sealed class Order
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public Product? Product { get; set; }
    public short Quantity { get; set; }
    public decimal Price { get; set; }

}

