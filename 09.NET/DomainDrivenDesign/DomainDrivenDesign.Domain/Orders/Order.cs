using DomainDrivenDesign.Domain.Abstractions;
using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Orders;

public sealed class Order : Entity
{
    public Order(string orderNumber, int statusValue)
    {
        OrderNumber = new(orderNumber);
        Status = OrderStatusEnum.FromValue(statusValue)!;
        Date = DateTime.Now;
    }
    public OrderNumber OrderNumber { get;  private set; } = new(string.Empty);
    public DateTime Date { get; private set; }
    public OrderStatusEnum Status { get; private set; } = OrderStatusEnum.AwaitingApproval;
    public ICollection<OrderLine> OrderLines { get; private set; } = new List<OrderLine>();

    public void CreateOrder(List<CreateOrderLineDto> request)
    {
        foreach (var item in request)
        {
            if(item.Quantity < 1)
            {
                throw new ArgumentException("Product quantity must be greather then 0");
            }

            OrderLine orderLine = new(
                 Id,
                 item.ProductId,
                 item.Quantity,
                 new(item.Amount, Currency.FromCode(item.Currency)));

            OrderLines.Add(orderLine);
        }
    }

    public void RemoveOrderLine(Guid orderLineId)
    {
        var orderLine = OrderLines.FirstOrDefault(p => p.Id == orderLineId);

        if(orderLine is null)
        {
            throw new ArgumentException("Not found order line");
        }

        OrderLines.Remove(orderLine);
    }
    
}
