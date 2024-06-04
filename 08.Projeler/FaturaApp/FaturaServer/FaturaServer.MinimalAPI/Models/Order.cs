namespace FaturaServer.MinimalAPI.Models;

public sealed class Order
{
    public Order()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public DateOnly Date { get; set; }
    public List<OrderDetail>? Details { get; set; }
}
