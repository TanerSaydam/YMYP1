namespace NTierArchitecture.Entities.DTOs;

public sealed record UpdateStudentDto(
    Guid Id,
    string FirstName,
    string LastName,
    string IdentityNumber,
    Guid ClassRoomId);
