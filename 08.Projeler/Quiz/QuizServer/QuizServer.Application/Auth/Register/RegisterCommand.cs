using MediatR;
using TS.Result;

namespace QuizServer.Application.Auth.Register;
public sealed record RegisterCommand(
    string UserName,
    string Password) : IRequest<Result<string>>;
