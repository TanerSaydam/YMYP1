using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizPages.IsQuizStart;
public sealed record IsQuizStartQuery(int RoomNumber) : IRequest<Result<bool>>;
