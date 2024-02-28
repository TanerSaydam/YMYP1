using eHospitalServer.Business.Services;
using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace eHospitalServer.DataAccess.Services;
internal class AuthService(
    UserManager<User> userManager,
    SignInManager<User> signInManager,
    JwtProvider jwtProvider
    ): IAuthService
{
    public async Task<Result<LoginResponseDto>> GetTokenByRefreshTokenAsync(string refreshToken, CancellationToken cancellationToken)
    {
        User? user = await userManager.Users.Where(p => p.RefreshToken == refreshToken).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            return (500, "Refresh token unavailable");
        }

        var loginResponse = await jwtProvider.CreateToken(user, false);


        return loginResponse;
    }

    public async Task<Result<LoginResponseDto>> LoginAsync(LoginRequestDto request, CancellationToken cancellationToken)
    {
        string emailOrUserName = request.EmailOrUserName.ToUpper();
        User? user = await userManager.Users
            .FirstOrDefaultAsync(p => 
            p.NormalizedUserName == emailOrUserName || 
            p.NormalizedEmail == emailOrUserName, 
            cancellationToken);

        if(user is null)
        {
            return (500, "User not found");
        }

        SignInResult signInResult = await signInManager.CheckPasswordSignInAsync(user, request.Password, true);

        if (signInResult.IsLockedOut)
        {
            TimeSpan? timeSpan = user.LockoutEnd - DateTime.UtcNow;
            if (timeSpan is not null)
                return (500, $"Your user has been locked for {Math.Ceiling(timeSpan.Value.TotalMinutes)} minutes due to entering the wrong password 3 times.");
            else
                return (500, "Your user has been locked out for 5 minutes due to entering the wrong password 3 times.");
        }

        if (signInResult.IsNotAllowed)
        {
            return (500, "Your e-mail address is not confirmed");
        }

        if (!signInResult.Succeeded)
        {
            return (500, "Your password is wrong");
        }

        var loginResponse = await jwtProvider.CreateToken(user, request.RememberMe);        


        return loginResponse;
    }    
}
