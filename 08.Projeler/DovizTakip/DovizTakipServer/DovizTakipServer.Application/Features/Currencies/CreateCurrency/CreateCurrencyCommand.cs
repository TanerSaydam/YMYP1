using MediatR;
using TS.Result;

namespace DovizTakipServer.Application.Features.Currencies.CreateCurrency;
public sealed record CreateCurrencyCommand(
    int TypeValue,
    decimal Amount
    ) : IRequest<Result<string>>;
