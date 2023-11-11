namespace BookStoreServer.WebApi.Dtos;

public sealed record RegisterDto(
    string Name,
    string Lastname,
    string Email,
    string Password,
    string Username);
