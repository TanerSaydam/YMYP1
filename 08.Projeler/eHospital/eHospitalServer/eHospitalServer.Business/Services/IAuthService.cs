using eHospitalServer.Entities.DTOs;
using TS.Result;

namespace eHospitalServer.Business.Services;
public interface IAuthService
{
    Task<Result<LoginResponseDto>> LoginAsync(LoginRequestDto request, CancellationToken cancellationToken);
    Task<Result<LoginResponseDto>> GetTokenByRefreshTokenAsync(string refreshToken, CancellationToken cancellationToken);
    Task<Result<string>> SendConfirmEmailAsync(string email, CancellationToken cancellationToken);
    Task<Result<string>> ConfirmVerificationEmailAsync(int emailConfirmCode, CancellationToken cancellationToken);
    Task<Result<string>> SendForgotPasswordEmailAsync(string emailOrUserName, CancellationToken cancellationToken);
    Task<Result<string>> ChangePasswordWithForgotPasswordCodeAsync(ChangePasswordWithForgotPasswordCodeDto request, CancellationToken cancellationToken);
}