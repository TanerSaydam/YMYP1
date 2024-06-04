namespace FaturaServer.MinimalAPI.Models;

public sealed class OrderDetail
{
    public OrderDetail()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Guid OrderId { get; set; }
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
}
