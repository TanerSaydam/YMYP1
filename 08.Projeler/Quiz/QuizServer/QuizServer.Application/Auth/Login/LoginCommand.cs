using MediatR;
using TS.Result;

namespace QuizServer.Application.Auth.Login;
public sealed record LoginCommand(
    string UserName,
    string Password) : IRequest<Result<string>>;
