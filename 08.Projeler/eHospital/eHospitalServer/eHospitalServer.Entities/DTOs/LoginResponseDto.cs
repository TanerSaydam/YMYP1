using eHospitalServer.Entities.Enums;

namespace eHospitalServer.Entities.DTOs;
public sealed record LoginResponseDto(
    string Token,
    string RefreshToken,
    DateTime RefreshTokenExpires);
