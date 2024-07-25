using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.ChangeQuizIsStart;
public sealed record ChangeQuizIsStartCommand(
    int RoomNumber) : IRequest<Result<string>>;