namespace RealWorld.WebAPI.Dtos;

public sealed record UpdateUserDto(
    int Id,
    string Name,
    int Age,
    DateOnly DateOfBirth);