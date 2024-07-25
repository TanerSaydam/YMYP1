using Microsoft.AspNetCore.SignalR;
using QuizServer.Application;
using QuizServer.Domain.Dtos;

namespace QuizServer.Infrastructure.Hubs;
public class QuizHub : Hub
{
    public static HashSet<QuizTime> QuizTimes = new();
    public async Task JoinQuizRoomByParticipant(string roomNumber, string email, string userName)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, roomNumber.ToString());
        QuizParticipant? quizParticipant = Shared.QuizParticipants.FirstOrDefault(p => p.RoomNumber == roomNumber && p.Email == email);
        if (quizParticipant is null)
        {
            quizParticipant = new(Context.ConnectionId, roomNumber, email, userName);
            Shared.QuizParticipants.Add(quizParticipant);
        }
        else
        {
            quizParticipant.ConnectionId = Context.ConnectionId;
        }

        await Clients.Group(roomNumber).SendAsync("JoinQuizRoom", quizParticipant);
    }

    public async Task SetQuestionTime(string roomNumber, string time)
    {
        int numberTime = Convert.ToInt32(time);
        await Task.Delay(500);
        await Clients.Group(roomNumber).SendAsync("QuestionTime", numberTime);
    }

    public async Task SetTimeByRoomNumber(string roomNumber)
    {
        await Task.Delay(500);
        QuizTime? quizTime = QuizTimes.FirstOrDefault(p => p.RoomNumber == roomNumber);
        if (quizTime is null)
        {
            quizTime = new(roomNumber, 15);
            QuizTimes.Add(quizTime);
        }
        else
        {
            quizTime.Time = 15;
        }

        await Clients.Group(roomNumber).SendAsync("Time", quizTime.Time);
    }

    public async Task LeaveQuizRoomByParticipant(string roomNumber, string email)
    {
        Shared.QuizParticipants.RemoveWhere(p => p.Email == email && p.RoomNumber == roomNumber);
        await Clients.Group(roomNumber).SendAsync("LeaveQuizRoom", email);
    }

    public async override Task OnDisconnectedAsync(Exception? exception)
    {
        List<QuizParticipant> participants = Shared.QuizParticipants.Where(p => p.ConnectionId == Context.ConnectionId).ToList();

        foreach (var item in participants)
        {
            await Clients.Group(item.RoomNumber).SendAsync("LeaveQuizRoom", item.Email);
        }

        Shared.QuizParticipants.RemoveWhere(p => p.ConnectionId == Context.ConnectionId);
    }
    public async Task JoinQuizRoomAsync(string roomNumber)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, roomNumber.ToString());
    }

    public async Task leaveQuizRoomAsync(string roomNumber)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomNumber.ToString());
    }
}
