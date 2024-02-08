using EntityFrameworkCoreGrup2.Linq.WebAPI.DTOs;
using FluentValidation;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Validators;

public class CreateCategoryDtoValidator : AbstractValidator<CreateCategoryDto>
{
    public CreateCategoryDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Geçerli bir kategori adı girin")
            .MinimumLength(5).WithMessage("Kategori adı en az 5 karakter olmalıdır");
    }
}
