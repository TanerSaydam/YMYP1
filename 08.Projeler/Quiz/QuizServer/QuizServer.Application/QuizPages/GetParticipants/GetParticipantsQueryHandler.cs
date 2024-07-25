using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetParticipants;

internal sealed class GetParticipantsQueryHandler : IRequestHandler<GetParticipantsQuery, Result<List<QuizParticipant>>>
{
    public async Task<Result<List<QuizParticipant>>> Handle(GetParticipantsQuery request, CancellationToken cancellationToken)
    {
        var response = Shared.QuizParticipants.Where(p => p.RoomNumber == request.RoomNumber.ToString()).ToList();

        await Task.CompletedTask;

        return response;
    }
}
