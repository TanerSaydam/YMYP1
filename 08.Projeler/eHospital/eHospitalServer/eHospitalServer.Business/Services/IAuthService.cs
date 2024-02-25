using eHospitalServer.Entities.DTOs;
using TS.Result;

namespace eHospitalServer.Business.Services;
public interface IAuthService
{
    Task<Result<LoginResponseDto>> LoginAsync(LoginRequestDto request, CancellationToken cancellationToken);
}
