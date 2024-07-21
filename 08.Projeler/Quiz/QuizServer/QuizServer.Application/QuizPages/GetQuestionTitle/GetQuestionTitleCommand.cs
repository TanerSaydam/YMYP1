using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetQuestionTitle;
public sealed record GetQuestionTitleCommand(
    int RoomNumber,
    int QuestionNumber) : IRequest<Result<string>>;
