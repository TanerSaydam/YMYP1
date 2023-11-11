namespace BookStoreServer.WebApi.Dtos;

public sealed record RequestDto(
    int PageSize,
    string Search,
    int? CategoryId);