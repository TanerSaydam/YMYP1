using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizDetails.DeleteQuizDetailById;
public sealed record DeleteQuizDetailByIdCommand(
    Guid Id) : IRequest<Result<string>>;
