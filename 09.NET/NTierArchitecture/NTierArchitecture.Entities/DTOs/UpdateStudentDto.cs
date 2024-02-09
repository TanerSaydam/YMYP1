namespace NTierArchitecture.Entities.DTOs;

public sealed record UpdateStudentDto(
    Guid Id,
    string FirstName,
    string LastName,
    int StudentNumber,
    string IdentityNumber,
    Guid ClassRoomId);
