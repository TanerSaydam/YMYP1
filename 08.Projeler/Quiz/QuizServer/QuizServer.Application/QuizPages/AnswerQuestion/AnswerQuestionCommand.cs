using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizPages.AnswerQuestion;
public sealed record AnswerQuestionCommand(
    int RoomNumber,
    int QuestionNumber,
    string Email,
    string Answer,
    int Time
    ) : IRequest<Result<bool>>;