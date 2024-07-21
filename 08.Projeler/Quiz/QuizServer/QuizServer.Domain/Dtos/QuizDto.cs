namespace QuizServer.Domain.Dtos;

public sealed record QuizDto(
    Guid Id,
    string Title,
    int RoomNumber);