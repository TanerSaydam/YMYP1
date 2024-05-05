using FluentValidation;
using RealWorld.WebAPI.Dtos;

namespace RealWorld.WebAPI.Validators;

public class UpdateUserDtoValidator : AbstractValidator<UpdateUserDto>
{
    public UpdateUserDtoValidator()
    {
        RuleFor(p=> p.Name).MinimumLength(3);
        RuleFor(p=> p.Age).GreaterThan(18);
        RuleFor(p => p.DateOfBirth).LessThanOrEqualTo(new DateOnly(2006, 01, 01));
    }
}
