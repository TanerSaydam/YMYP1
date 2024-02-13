namespace NTierArchitecture.Entities.DTOs;
public sealed record LoginDto(
    string EmailOrUserName,
    string Password);
