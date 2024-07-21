using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetQuizById;
public sealed record GetQuizByIdCommand(Guid id) : IRequest<Result<QuizDto>>;
