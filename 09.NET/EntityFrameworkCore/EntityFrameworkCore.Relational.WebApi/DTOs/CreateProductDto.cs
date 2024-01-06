namespace EntityFrameworkCore.Relational.WebApi.DTOs;

public sealed record CreateProductDto(
    string ProductName,
    string ProductDescription,
    decimal ProductPrice,
    string CategoryName);

