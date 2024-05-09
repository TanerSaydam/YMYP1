namespace DomainDrivenDesign.Domain.Orders;

public interface IOrderRepositor
{
    Task<Order> CreateAsync(CreateOrderDto request, CancellationToken cancellationToken = default);
    Task<List<Order>> GetlAllAsync(CancellationToken cancellationToken = default);
}
