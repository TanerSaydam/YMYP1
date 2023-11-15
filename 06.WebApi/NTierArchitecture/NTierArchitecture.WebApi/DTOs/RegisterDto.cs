namespace NTierArchitecture.WebApi.DTOs;

public sealed record RegisterDto(
    string Name,
    string LastName,
    string Email,
    string Password);