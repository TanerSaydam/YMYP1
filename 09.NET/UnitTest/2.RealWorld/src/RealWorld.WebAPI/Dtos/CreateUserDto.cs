namespace RealWorld.WebAPI.Dtos;

public sealed record CreateUserDto(
    string Name,
    int Age,
    DateOnly DateOfBirth);
