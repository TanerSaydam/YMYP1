using Microsoft.AspNetCore.SignalR;

namespace QuizServer.Infrastructure.Hubs;
public class CreateRoomHub : Hub
{
    public async Task JoinQuizRoomAsync(string roomNumber)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, roomNumber.ToString());
    }

    public async Task leaveQuizRoomAsync(string roomNumber)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomNumber.ToString());
    }
}
