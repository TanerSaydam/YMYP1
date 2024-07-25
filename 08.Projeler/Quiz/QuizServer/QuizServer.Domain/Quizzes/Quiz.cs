using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Shared;
using QuizServer.Domain.Users;

namespace QuizServer.Domain.Quizes;
public sealed class Quiz : Entity
{
    private Quiz()
    {

    }
    public Quiz(Title title, RoomNumber roomNumber, Identity userId)
    {
        Title = title;
        RoomNumber = roomNumber;
        UserId = userId;
        IsStart = new(false);
    }
    public Title Title { get; private set; } = default!;
    public RoomNumber RoomNumber { get; private set; } = default!;
    public Identity UserId { get; private set; } = default!;
    public User? User { get; private set; }
    public IsStart IsStart { get; private set; } = default!;
    public IReadOnlyCollection<QuizDetail> Details { get; private set; } = default!;
    public void ChangeTitle(Title title)
    {
        Title = title;
    }
    public void ChangeRoomNumber(RoomNumber roomNumber)
    {
        RoomNumber = roomNumber;
    }

    public void ChangeIsStart(IsStart isStart)
    {
        IsStart = isStart;
    }
}