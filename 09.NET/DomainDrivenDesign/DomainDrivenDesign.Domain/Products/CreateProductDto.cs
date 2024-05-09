using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Products;

public sealed record CreateProductDto(
    string Name, 
    string Description, 
    decimal Price, 
    Currency Currency);