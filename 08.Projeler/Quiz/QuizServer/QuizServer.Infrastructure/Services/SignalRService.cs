using Microsoft.AspNetCore.SignalR;
using QuizServer.Application;
using QuizServer.Application.Services;
using QuizServer.Infrastructure.Hubs;

namespace QuizServer.Infrastructure.Services;
internal sealed class SignalRService(
    IHubContext<CreateRoomHub> hubContext) : ISignalRService
{
    public async Task JoinQuizRoom(string roomNumber, Participant participant)
    {
        await hubContext.Clients.Group(roomNumber).SendAsync("JoinQuizRoom", participant);
    }

    public async Task SendParticipantInformationToWhoListener(string roomNumber, Participant participant)
    {
        await hubContext.Clients.Group(roomNumber).SendAsync("GetParticipantInformation", participant);
    }
}
