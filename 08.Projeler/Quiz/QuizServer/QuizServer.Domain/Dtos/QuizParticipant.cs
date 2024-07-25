namespace QuizServer.Domain.Dtos;
public sealed record QuizParticipant
{
    public QuizParticipant(string connectionId, string roomNumber, string email, string userName)
    {
        ConnectionId = connectionId;
        RoomNumber = roomNumber;
        Email = email;
        UserName = userName;
        Point = 0;
    }

    public string ConnectionId { get; set; }
    public string RoomNumber { get; init; }
    public string Email { get; init; }
    public string UserName { get; init; }
    public int Point { get; set; }
}

public sealed record QuizTime
{
    public QuizTime(string roomNumber, int time)
    {
        RoomNumber = roomNumber;
        Time = time;
    }
    public string RoomNumber { get; init; }
    public int Time { get; set; }
}