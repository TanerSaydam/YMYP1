namespace ITDeskServer.DTOs;

public sealed record LoginDto(
    string UserNameOrEmail,
    string Password,
    bool RememberMe = false);
