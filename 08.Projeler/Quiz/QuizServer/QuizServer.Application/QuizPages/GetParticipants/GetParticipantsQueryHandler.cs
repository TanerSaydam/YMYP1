using MediatR;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetParticipants;

internal sealed class GetParticipantsQueryHandler : IRequestHandler<GetParticipantsQuery, Result<List<Participant>>>
{
    public async Task<Result<List<Participant>>> Handle(GetParticipantsQuery request, CancellationToken cancellationToken)
    {
        var response = Shared.Participants.Where(p => p.RoomNumber == request.RoomNumber).Select(s => s.Participant).ToList();

        await Task.CompletedTask;

        return response;
    }
}
