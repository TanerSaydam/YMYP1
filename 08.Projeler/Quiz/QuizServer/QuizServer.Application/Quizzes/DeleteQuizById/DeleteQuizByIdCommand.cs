using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.DeleteQuizById;
public sealed record DeleteQuizByIdCommand(
    Guid Id) : IRequest<Result<string>>;
