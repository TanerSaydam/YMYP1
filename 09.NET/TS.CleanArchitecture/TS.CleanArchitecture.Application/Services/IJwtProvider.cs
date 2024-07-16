using TS.CleanArchitecture.Application.Features.Auth.Login;
using TS.CleanArchitecture.Domain.Entities;

namespace TS.CleanArchitecture.Application.Services;
public interface IJwtProvider
{
    Task<LoginCommandResponse> CreateToken(AppUser user);
}
