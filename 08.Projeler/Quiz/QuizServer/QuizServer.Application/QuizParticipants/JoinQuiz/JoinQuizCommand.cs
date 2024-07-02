using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizParticipants.JoinQuiz;
public sealed record JoinQuizCommand(
    int RoomNumber,
    string UserName,
    string Email) : IRequest<Result<string>>;
