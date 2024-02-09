namespace NTierArchitecture.Entities.DTOs;
public sealed record CreateStudentDto(
    string FirstName,
    string LastName,
    int StudentNumber,
    string IdentityNumber,
    Guid ClassRoomId);
