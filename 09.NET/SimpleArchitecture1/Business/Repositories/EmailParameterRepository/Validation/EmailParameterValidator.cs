using Entities.Concrete;
using FluentValidation;

namespace Business.Repositories.EmailParameterRepository.Validation;
internal class EmailParameterValidator : AbstractValidator<EmailParameter>
{
    public EmailParameterValidator()
    {
        RuleFor(p => p.Smtp).NotEmpty().WithMessage("SMTP adresi boş olamaz");
        RuleFor(p => p.Email).NotEmpty().WithMessage("Mail adresi boş olamaz");
        RuleFor(p => p.Password).NotEmpty().WithMessage("Şifre adresi boş olamaz");
        RuleFor(p => p.Port).NotEmpty().WithMessage("Port adresi boş olamaz");
    }
}
