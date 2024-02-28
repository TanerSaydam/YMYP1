namespace eHospitalServer.Entities.DTOs;

public sealed record LoginRequestDto(
    string EmailOrUserName,
    string Password,
    bool RememberMe = false);
