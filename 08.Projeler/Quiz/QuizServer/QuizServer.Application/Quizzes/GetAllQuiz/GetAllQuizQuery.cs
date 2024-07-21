using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;
public sealed record GetAllQuizQuery() : IRequest<Result<List<QuizDto>>>;
