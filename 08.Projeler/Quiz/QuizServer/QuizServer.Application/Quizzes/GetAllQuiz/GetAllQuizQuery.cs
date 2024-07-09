using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;
public sealed record GetAllQuizQuery() : IRequest<Result<List<GetAllQuizQueryResponse>>>;
