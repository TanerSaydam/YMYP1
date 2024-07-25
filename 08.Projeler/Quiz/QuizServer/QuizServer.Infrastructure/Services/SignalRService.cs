using Microsoft.AspNetCore.SignalR;
using QuizServer.Application.Services;
using QuizServer.Domain.Dtos;
using QuizServer.Infrastructure.Hubs;

namespace QuizServer.Infrastructure.Services;
internal sealed class SignalRService(
    IHubContext<QuizHub> hubContext) : ISignalRService
{
    public async Task JoinQuizRoom(string roomNumber, QuizParticipant participant)
    {
        await hubContext.Clients.Group(roomNumber).SendAsync("JoinQuizRoom", participant);
    }

    public async Task SendParticipantInformationToWhoListener(string roomNumber, QuizParticipant participant)
    {
        await hubContext.Clients.Group(roomNumber).SendAsync("GetParticipantInformation", participant);
    }
}
