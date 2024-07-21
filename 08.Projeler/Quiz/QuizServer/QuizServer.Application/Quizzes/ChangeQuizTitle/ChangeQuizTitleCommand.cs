using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.ChangeQuizTitle;
public sealed record ChangeQuizTitleCommand(
    Guid Id,
    string Title) : IRequest<Result<string>>;
