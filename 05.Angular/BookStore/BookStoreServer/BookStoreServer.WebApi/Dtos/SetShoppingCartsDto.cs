using BookStoreServer.WebApi.ValueObjects;

namespace BookStoreServer.WebApi.Dtos;

public sealed record SetShoppingCartsDto(
    int BookId,
    int UserId,
    Money Price,
    int Quantity);
