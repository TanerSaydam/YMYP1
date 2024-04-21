using DovizTakipServer.Application.Features.Auth.Login;
using DovizTakipServer.Domain.Entities;

namespace DovizTakipServer.Application.Services;
public interface IJwtProvider
{
    Task<LoginCommandResponse> CreateToken(AppUser user);
}
