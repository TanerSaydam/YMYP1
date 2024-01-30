using FluentValidation;
using PersonelApp.WebAPI.DTOs;

namespace PersonelApp.WebAPI.Validators;

public sealed class PersonelDtoValidator : AbstractValidator<PersonelDto>
{
    public PersonelDtoValidator()
    {
        RuleFor(p=> p.FirstName).NotEmpty().MinimumLength(3);
        RuleFor(p=> p.LastName).NotEmpty().MinimumLength(3);
        RuleFor(p=> p.Email)
            .NotEmpty().WithMessage("Email Adresi boş olamaz")
            .MinimumLength(3).WithMessage("Email Adresi en az 3 karakter olmalıdır")
            .EmailAddress().WithMessage("Geçerli bir email adresi girin");        
    }
}
