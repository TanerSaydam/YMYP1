using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizDetails.CreateQuizDetail;
public sealed record CreateQuizDetailCommand(
    Guid QuizId,
    string Title,
    string AnswerA,
    string AnswerB,
    string AnswerC,
    string AnswerD,
    string CorrectAnswer,
    sbyte TimeOut
    ) : IRequest<Result<string>>;
