namespace EntityFrameworkCore.RepositoryPattern.WebApi.DTOs;

public sealed record AddShoppingCartDto(
    int ProductId,
    int Quantity);
