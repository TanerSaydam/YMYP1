using CleanArchitecture.Application.Utilities;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Domain.Events;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TS.Result;


namespace CleanArchitecture.Application.Features.Auth.Register;

public sealed class RegisterCommandHandler(
    UserManager<AppUser> userManager,
    IMediator mediator) : IRequestHandler<RegisterCommand, Result<string>>
{
    public async Task<Result<string>> Handle(RegisterCommand request, CancellationToken cancellationToken = default)
    {
        Random random = new();
        int emailConfirmCode = random.Next(111111,999999);
        bool isEmailConfirmCodeExists = true;
        while (isEmailConfirmCodeExists)
        {
            isEmailConfirmCodeExists = await userManager.Users.AnyAsync(p => p.EmailConfirmCode == emailConfirmCode, cancellationToken);

            if(isEmailConfirmCodeExists)
            {
                emailConfirmCode = random.Next(111111, 999999);
            }
        }

        AppUser user = new()
        {
            FirstName = request.FirstName.Trim(),
            LastName = request.LastName.Trim(),
            Email = request.Email.ToLower().Trim(),
            UserName = request.UserName.ReplaceAllTurkishCharacters().ToLower().Trim(),
            EmailConfirmCode = emailConfirmCode,
        };

        IdentityResult result = await userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
        {
            List<string> errorMessages = result.Errors.Select(s => s.Description).ToList();
            return Result<string>.Failure(errorMessages);
        }

        await mediator.Publish(new AuthDomainEvent(user));


        return Result<string>.Succeed("User created successfully");
    }

   
}
