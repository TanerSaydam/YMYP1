using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetParticipantsByRoomNumber;

internal sealed class GetParticipantsByRoomNumberQueryHandler : IRequestHandler<GetParticipantsByRoomNumberQuery, Result<List<QuizParticipant>>>
{
    public async Task<Result<List<QuizParticipant>>> Handle(GetParticipantsByRoomNumberQuery request, CancellationToken cancellationToken)
    {
        List<QuizParticipant> participants =
             Shared.QuizParticipants
            .Where(p => p.RoomNumber == request.RoomNumber.ToString())
            .ToList();

        await Task.CompletedTask;

        return participants!;
    }
}
