using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.QuizDetails.GetAllQuizDetailByQuizId;
public sealed record GetAllQuizDetailByQuizIdQuery(
    Guid QuizId) : IRequest<Result<List<QuizDetailDto>>>;
