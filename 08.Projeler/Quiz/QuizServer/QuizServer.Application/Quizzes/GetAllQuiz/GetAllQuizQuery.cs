using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;
public sealed record GetAllQuizQuery() : IRequest<Result<List<Quiz>>>;
