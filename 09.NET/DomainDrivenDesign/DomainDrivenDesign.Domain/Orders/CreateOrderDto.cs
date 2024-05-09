using DomainDrivenDesign.Domain.Products;

namespace DomainDrivenDesign.Domain.Orders;

public sealed record CreateOrderDto(
    string OrderNumber, 
    int StatusValue,
    List<CreateProductDto> OrderLines);
