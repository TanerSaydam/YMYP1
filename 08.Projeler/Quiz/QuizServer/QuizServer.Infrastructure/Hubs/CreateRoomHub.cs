using Microsoft.AspNetCore.SignalR;
using QuizServer.Application;
using QuizServer.Domain.Dtos;

namespace QuizServer.Infrastructure.Hubs;
public class CreateRoomHub : Hub
{
    public static HashSet<QuizParticipant> QuizParticipants = new();
    public static HashSet<QuizTime> QuizTimes = new();
    public async Task JoinQuizRoomByParticipant(string roomNumber, string email, string userName)
    {
        QuizParticipant? quizParticipant = QuizParticipants.FirstOrDefault(p => p.RoomNumber == roomNumber && p.Email == email);
        if (quizParticipant is null)
        {
            QuizParticipants.Add(new(Context.ConnectionId, roomNumber, email));
            await Groups.AddToGroupAsync(Context.ConnectionId, roomNumber.ToString());
            Participant participant = new(userName, email);
            Participants participants = new(Convert.ToInt32(roomNumber), participant);
            Shared.Participants.Add(participants);

            await Clients.Group(roomNumber).SendAsync("JoinQuizRoom", participant);
        }
        else
        {
            quizParticipant.ConnectionId = Context.ConnectionId;
        }

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
            quizTime = new(roomNumber, 3);
            QuizTimes.Add(quizTime);
        }
        else
        {
            quizTime.Time = 3;
        }

        await Clients.Group(roomNumber).SendAsync("Time", quizTime.Time);
    }

    public async Task LeaveQuizRoomByParticipant(string roomNumber, string email)
    {
        QuizParticipants.RemoveWhere(p => p.RoomNumber == roomNumber && p.Email == email);
        await Clients.Group(roomNumber).SendAsync("LeaveQuizRoom", email);
        var participant = Shared.Participants.Where(p => p.Participant.Email == email && p.RoomNumber.ToString() == roomNumber).FirstOrDefault();
        if (participant is not null)
        {
            Shared.Participants.Remove(participant);
        }
    }

    public async override Task OnDisconnectedAsync(Exception? exception)
    {
        List<QuizParticipant> participants = QuizParticipants.Where(p => p.ConnectionId == Context.ConnectionId).ToList();

        foreach (var item in participants)
        {
            await Clients.Group(item.RoomNumber).SendAsync("LeaveQuizRoom", item.Email);
            var participant = Shared.Participants.Where(p => p.Participant.Email == item.Email && p.RoomNumber.ToString() == item.RoomNumber).FirstOrDefault();
            if (participant is not null)
            {
                Shared.Participants.Remove(participant);
            }
        }

        QuizParticipants.RemoveWhere(p => p.ConnectionId == Context.ConnectionId);
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
