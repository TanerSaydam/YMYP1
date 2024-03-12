namespace eHospitalServer.Entities.DTOs;
public sealed record CreateAppointmentDto(
    Guid DoctorId,
    Guid? PatientId,
    string FirstName,
    string LastName,
    string FullAddress,    
    string? Email,
    string? PhoneNumber,
    string IdentityNumber,
    DateOnly? DateOfBirth,
    string? BloodType,
    DateTime StartDate,
    DateTime EndDate,
    decimal Price
    );
