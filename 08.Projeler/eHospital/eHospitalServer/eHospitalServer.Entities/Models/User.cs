using eHospitalServer.Entities.Enums;
using Microsoft.AspNetCore.Identity;

namespace eHospitalServer.Entities.Models;

public sealed class User : IdentityUser<Guid>
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string FullName => string.Join(" ", FirstName, LastName);
    public string IdentityNumber { get; set; } = string.Empty;
    public string FullAddress { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public bool IsDeleted { get; set; } = false;
    public DateOnly? DateOfBirth { get; set; }
    public string? BloodType { get; set; }
    public UserType UserType { get; set; } = UserType.User;

    public int EmailConfirmCode { get; set; }
    public DateTime EmailConfirmCodeSendDate {  get; set; }

    public string? RefreshToken {  get; set; }
    public DateTime? RefreshTokenExpires { get; set; }

    public Guid? DoctorDetailId { get; set; }
    public DoctorDetail? DoctorDetail { get; set; }
}
