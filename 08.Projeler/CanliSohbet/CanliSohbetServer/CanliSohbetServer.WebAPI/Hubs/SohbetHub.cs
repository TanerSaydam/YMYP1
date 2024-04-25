using Microsoft.AspNetCore.SignalR;

namespace CanliSohbetServer.WebAPI.Hubs;

public sealed class SohbetHub : Hub
{
    private static readonly Dictionary<string, object> Users = new();
    public async Task Connect(string userName, string avatar)
    {
        Users.Add(Context.ConnectionId, new { userName = userName, avatar = avatar });

        await Clients.All.SendAsync("Login", Users.ToList());

        await Task.CompletedTask;
    }


    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        Users.Remove(Context.ConnectionId);

        await Task.CompletedTask;
    }

    public async Task Send(string who, string avatar, string connectionId, string message)
    {        
        object value = Users.FirstOrDefault(p=> p.Value == who).Value;

        await Clients.Client(connectionId).SendAsync("Chat", new {userName= who, avatar = avatar, message = message});
    }

}
