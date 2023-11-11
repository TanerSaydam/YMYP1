using BookStoreServer.WebApi.Enums;

namespace BookStoreServer.WebApi.Models;

public sealed class OrderStatus
{
    public int Id { get; set; }
    public string OrderNumber { get; set; }
    public OrderStatusEnum Status { get; set; }
    public DateTime StatusDate { get; set; }
}