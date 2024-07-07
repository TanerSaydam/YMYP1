namespace QuizServer.Domain.Dtos;
public sealed record QuizParticipant(
    string ConnectionId,
    string RoomNumber,
    string Email);
