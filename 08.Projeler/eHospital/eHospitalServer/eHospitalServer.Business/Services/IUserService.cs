using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Models;
using TS.Result;

namespace eHospitalServer.Business.Services;
public interface IUserService
{
    Task<Result<string>> CreateUserAsync(CreateUserDto request, CancellationToken cancellationToken);
    Task<Result<User>> FindPatientWithIdentityNumberAsync(string identityNumber, CancellationToken cancellationToken);
    Task<Result<string>> CreatePatientAsync(CreatePatientDto request, CancellationToken cancellationToken);    
}
