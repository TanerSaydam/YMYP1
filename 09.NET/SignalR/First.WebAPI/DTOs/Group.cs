namespace First.WebAPI.DTOs;

public sealed record Group(
    string ConnectionId,
    string GroupName,
    string UserName);
