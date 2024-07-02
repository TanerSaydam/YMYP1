using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.CreateQuiz;
public sealed record CreateQuizCommand(
    string Title) : IRequest<Result<string>>;