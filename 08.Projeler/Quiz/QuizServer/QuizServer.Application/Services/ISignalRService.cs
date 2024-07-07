namespace QuizServer.Application.Services;
public interface ISignalRService
{
    Task JoinQuizRoom(string roomNumber, Participant participant);
}
