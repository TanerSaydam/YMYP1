using CleanArchitecture.Domain.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Features.Auth.Register;
public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
{
    public RegisterCommandValidator(UserManager<AppUser> userManager)
    {
        RuleFor(p => p.Email)
            .EmailAddress()
            .MinimumLength(3)
            .MustAsync(async (email, cancellationToken) =>
                !await userManager.Users.AnyAsync(p => p.Email == email, cancellationToken))
            .WithMessage("Email address already exists");
        RuleFor(p => p.UserName)
            .MinimumLength(3)
            .MustAsync(async (userName, cancellationToken)=> 
                !await userManager.Users.AnyAsync(p=> p.UserName == userName, cancellationToken))
            .WithMessage("User name already exists");
        RuleFor(p => p.FirstName).MinimumLength(3);
        RuleFor(p => p.LastName).MinimumLength(3);        
    }
}
