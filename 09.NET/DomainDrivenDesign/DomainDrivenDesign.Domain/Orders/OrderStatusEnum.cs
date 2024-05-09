using DomainDrivenDesign.Domain.Abstractions;

namespace DomainDrivenDesign.Domain.Orders;

public class OrderStatusEnum : SmartEnum<OrderStatusEnum>
{
    public static readonly OrderStatusEnum AwaitingApproval = new("Awaiting Approval", 1);
    public static readonly OrderStatusEnum BeingPrepared = new("Being Prepared", 2);
    public static readonly OrderStatusEnum InTransit = new("In Transit", 3);
    public static readonly OrderStatusEnum Delivered = new("Delivered", 4);

    public OrderStatusEnum(string name, int value) : base(name, value)
    {
       
    }
}
