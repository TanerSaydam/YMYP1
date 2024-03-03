namespace eHospitalServer.Entities.DTOs;
public sealed record ChangePasswordWithForgotPasswordCodeDto(
    int ForgotPasswordCode,
    string NewPassword);
