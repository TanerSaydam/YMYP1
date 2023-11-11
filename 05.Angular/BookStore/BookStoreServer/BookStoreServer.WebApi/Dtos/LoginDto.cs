namespace BookStoreServer.WebApi.Dtos;

public sealed record LoginDto(
    string UsernameOrEmail,
    string Password);
