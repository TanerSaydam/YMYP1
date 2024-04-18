using First.WebAPI.DTOs;
using Microsoft.AspNetCore.SignalR;

namespace First.WebAPI.Hubs;

public sealed class ChatHub : Hub
{
    public static Dictionary<string,string> Users = new();   
    public static HashSet<Group> GroupUsers = new();
    public async Task Join(string user)
    {
        Users.Add(Context.ConnectionId, user);
        await Clients.All.SendAsync("users", Users.Select(s=> s.Value).ToList());
    }

    public async Task JoinGroup(string groupName,string user)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        GroupUsers.Add(new(Context.ConnectionId, groupName, user));
        await Clients.Group(groupName).SendAsync("groupUsers", 
                    GroupUsers.Where(p=> p.GroupName == groupName).Select(s=> s.UserName));
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        Users.Remove(Context.ConnectionId);
        await Clients.All.SendAsync("users", Users.Select(s => s.Value).ToList());
        var groups = GroupUsers.Where(p => p.ConnectionId == Context.ConnectionId).ToList();
        foreach (var item in groups)
        {
            GroupUsers.Remove(item);
            await Clients.Group(item.GroupName).SendAsync("groupUsers",
                    GroupUsers.Where(p => p.GroupName == item.GroupName).Select(s => s.UserName));
        }
    }
}