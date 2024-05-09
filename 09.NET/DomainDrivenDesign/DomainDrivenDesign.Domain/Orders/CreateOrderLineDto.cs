namespace DomainDrivenDesign.Domain.Orders;

public sealed record CreateOrderLineDto(
    Guid ProductId,
    int Quantity,
    decimal Amount,
    string Currency);