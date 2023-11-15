using FluentValidation;
using NTierArchitecture.WebApi.DTOs;

namespace NTierArchitecture.WebApi.Validators;

public sealed class RegisterDtoValidator : AbstractValidator<RegisterDto>
{
    public RegisterDtoValidator()
    {
        RuleFor(p=> p.Name).NotEmpty().WithMessage("Ad alanı boş olamaz");
        RuleFor(p=> p.Name).NotNull().WithMessage("Ad alanı boş olamaz");
        RuleFor(p=> p.Name).MinimumLength(3).WithMessage("Ad alanı en az 3 karakter olmalıdır");
        RuleFor(p => p.LastName).NotEmpty().WithMessage("Soyadı alanı boş olamaz");
        RuleFor(p => p.LastName).NotNull().WithMessage("Soyadı alanı boş olamaz");
        RuleFor(p => p.LastName).MinimumLength(3).WithMessage("Soyadı alanı en az 3 karakter olmalıdır");
        RuleFor(p => p.Email).NotEmpty().WithMessage("Email alanı boş olamaz");
        RuleFor(p => p.Email).NotNull().WithMessage("Email alanı boş olamaz");
        RuleFor(p => p.Email).EmailAddress().WithMessage("Geçerli bir email adresi girin");
        RuleFor(p => p.Password).NotEmpty().WithMessage("Şifre alanı boş olamaz");
        RuleFor(p => p.Password).NotNull().WithMessage("Şifre alanı boş olamaz");
        RuleFor(p => p.Password).MinimumLength(3).WithMessage("Şifre alanı en az 3 karakter olmalıdır");
    }
}
