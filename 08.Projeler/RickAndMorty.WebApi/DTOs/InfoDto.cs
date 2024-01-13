namespace RickAndMorty.WebApi.DTOs;

public sealed record InfoDto(
    int Count,
    int Pages,
    string? Next,
    string? Prev);