namespace Products.WebAPI.Dtos;

public sealed record ProductDto(
    int Id,
    string Name,
    decimal Price,
    int CategoryId,
    string CategoryName);