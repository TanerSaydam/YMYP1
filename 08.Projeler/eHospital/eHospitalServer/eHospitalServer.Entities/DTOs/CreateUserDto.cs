using eHospitalServer.Entities.Enums;

namespace eHospitalServer.Entities.DTOs;
public sealed record CreateUserDto(
    string FirstName,
    string LastName,
    string IdentityNumber = "11111111111",
    string FullAddress = "",
    string? Email = null,
    string? UserName = null,
    string? Password = null,
    string? PhoneNumber = null,
    DateOnly? DateOfBirth = null,
    string? BloodType = null,
    UserType UserType = UserType.User,
    Specialty? Specialty = null,
    List<string>? WorkingDays = null);
