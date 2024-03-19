using FluentValidation;
using MediatR;
using TS.Result;

namespace CleanArchitecture.Application.Features.Test;
public sealed record TestCommand(
    int Age) : IRequest<Result<string>>;

internal sealed class TestCommandHandler : IRequestHandler<TestCommand, Result<string>>
{
    public async Task<Result<string>> Handle(TestCommand request, CancellationToken cancellationToken)
    {
        await Console.Out.WriteLineAsync("I am working...");
        await Task.CompletedTask;
        return "I am done.";
    }
}


public sealed class TestCommandValidator : AbstractValidator<TestCommand>
{
    public TestCommandValidator()
    {

    }
}
