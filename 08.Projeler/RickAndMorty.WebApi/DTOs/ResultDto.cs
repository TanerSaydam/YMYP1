namespace RickAndMorty.WebApi.DTOs;

public sealed record ResultDto(
    int Id,
    string Name,
    string Air_Date,
    string Episode,
    string Url,
    DateTime Created,
    List<string> Characters);