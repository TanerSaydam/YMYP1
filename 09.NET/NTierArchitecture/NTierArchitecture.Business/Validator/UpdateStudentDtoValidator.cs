using FluentValidation;
using NTierArchitecture.Entities.DTOs;

namespace NTierArchitecture.Business.Validator;

public sealed class UpdateStudentDtoValidator : AbstractValidator<UpdateStudentDto>
{
    public UpdateStudentDtoValidator()
    {
        RuleFor(p => p.Id).NotEmpty();
        RuleFor(p => p.FirstName).NotEmpty().MinimumLength(3);
        RuleFor(p => p.LastName).NotEmpty().MinimumLength(3);
        RuleFor(p => p.IdentityNumber)
            .NotEmpty()
            .MinimumLength(11)
            .MaximumLength(11)
            .Matches("[0-9]");
    }
}
