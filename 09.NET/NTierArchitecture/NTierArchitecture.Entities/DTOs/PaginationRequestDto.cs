namespace NTierArchitecture.Entities.DTOs;
public sealed record PaginationRequestDto(
    Guid? Id,
    int PageNumber = 1,
    int PageSize = 10,
    string Search = ""
    );
