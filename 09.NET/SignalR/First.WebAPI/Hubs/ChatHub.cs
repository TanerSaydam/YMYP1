using First.WebAPI.DTOs;
using Microsoft.AspNetCore.SignalR;

namespace First.WebAPI.Hubs;

public sealed class ChatHub : Hub
{
    public static Dictionary<string,string> Users = new();   

    public async Task Join(string user)
    {
        Users.Add(Context.ConnectionId, user);
        await Clients.All.SendAsync("users", Users.Select(s=> s.Value).ToList());
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        Users.Remove(Context.ConnectionId);
        await Clients.All.SendAsync("users", Users.Select(s => s.Value).ToList());
    }
}
