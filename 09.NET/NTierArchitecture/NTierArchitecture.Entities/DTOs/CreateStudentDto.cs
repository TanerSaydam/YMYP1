namespace NTierArchitecture.Entities.DTOs;
public sealed record CreateStudentDto(
    string FirstName,
    string LastName,
    string IdentityNumber,
    Guid ClassRoomId);
