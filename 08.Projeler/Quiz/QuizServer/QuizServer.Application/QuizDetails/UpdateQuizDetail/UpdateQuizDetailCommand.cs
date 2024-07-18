using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizDetails.UpdateQuizDetail;
public sealed record UpdateQuizDetailCommand(
    Guid Id,
    string Title,
    string AnswerA,
    string AnswerB,
    string AnswerC,
    string AnswerD,
    string CorrectAnswer,
    sbyte TimeOut
    ) : IRequest<Result<string>>;

