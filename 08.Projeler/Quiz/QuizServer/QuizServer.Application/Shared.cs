namespace QuizServer.Application;
public static class Shared
{
    public static HashSet<Participants> Participants = new();
}

public sealed record Participants(
    int RoomNumber,
    Participant Participant);

public sealed record Participant
{
    public Participant(string userName, string email)
    {
        UserName = userName;
        Email = email;
    }
    public string UserName { get; init; }
    public string Email { get; init; }
    public int Point { get; set; }
}