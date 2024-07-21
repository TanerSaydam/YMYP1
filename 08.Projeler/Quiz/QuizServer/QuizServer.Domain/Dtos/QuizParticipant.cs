namespace QuizServer.Domain.Dtos;
public sealed record QuizParticipant(
    string ConnectionId,
    string RoomNumber,
    string Email);

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