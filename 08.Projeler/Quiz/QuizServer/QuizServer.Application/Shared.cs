namespace QuizServer.Application;
public static class Shared
{
    public static List<Participants> Participants = new();
}

public sealed record Participants(
    int RoomNumber,
    Participant Participant);

public sealed record Participant(
    string UserName,
    string Email,
    int Point = 0);