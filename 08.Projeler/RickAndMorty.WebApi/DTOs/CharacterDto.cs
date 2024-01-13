namespace RickAndMorty.WebApi.DTOs;

public sealed record CharacterDto(
    int Id,
    string Name,
    string Status,
    string Species,
    string Type,
    string Gender,
    OriginDto Origin,
    LocationDto Location,
    string Image,
    List<string> Episode,
    string Url,
    DateTime Created
    );

public sealed record OriginDto(
    string Name,
    string Url);

public sealed record LocationDto(
    string Name,
    string Url);
