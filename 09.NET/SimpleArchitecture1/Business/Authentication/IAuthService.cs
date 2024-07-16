using Core.Utilities.Result.Abstract;
using Core.Utilities.Security.JWT;
using Entities.Dtos;

namespace Business.Abstract;
public interface IAuthService
{
    Task<IResult> Register(RegisterAuthDto registerDto);
    Task<IDataResult<Token>> Login(LoginAuthDto loginDto);
}
