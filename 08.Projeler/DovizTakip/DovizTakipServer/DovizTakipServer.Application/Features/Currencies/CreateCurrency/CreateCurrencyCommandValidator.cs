using FluentValidation;

namespace DovizTakipServer.Application.Features.Currencies.CreateCurrency;

public sealed class CreateCurrencyCommandValidator : AbstractValidator<CreateCurrencyCommand>
{
    public CreateCurrencyCommandValidator()
    {
        RuleFor(p => p.Amount).GreaterThan(0);
        RuleFor(p => p.TypeValue).GreaterThan(0);
    }
}
