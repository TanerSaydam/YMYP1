using eHospitalServer.Entities.DTOs;
using FluentValidation;

namespace eHospitalServer.Business.Validators;
public sealed class CreateUserDtoValidator : AbstractValidator<CreateUserDto>
{
    public CreateUserDtoValidator()
    {
        RuleFor(p=> p.FirstName).NotEmpty().WithMessage("Ad alanı boş olamaz");
        RuleFor(p=> p.FirstName).NotNull().WithMessage("Ad alanı boş olamaz");
        RuleFor(p=> p.FirstName).MinimumLength(3).WithMessage("Ad alanı 3 karakterden uzun olmalı");
    }
}
