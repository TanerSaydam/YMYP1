using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newsletter.Domain.Entities;
using TS.Result;

namespace Newsletter.Application.Features.Auth.Login;

internal sealed class LoginCommandHandler(
    UserManager<AppUser> userManager) : IRequestHandler<LoginCommand, Result<string>>
{
    public async Task<Result<string>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        AppUser? appuser = 
            await userManager
            .Users
            .FirstOrDefaultAsync(p=> 
            p.Email == request.UserNameOrEmail || 
            p.UserName == request.UserNameOrEmail, cancellationToken);

        if (appuser is null)
        {
            return Result<string>.Failure("User not found");
        }

        bool checkPassword = await userManager.CheckPasswordAsync(appuser, request.Password);
        if (!checkPassword)
        {
            return Result<string>.Failure("Password is wrong");
        }

        return "Login is successful";
    }
}
