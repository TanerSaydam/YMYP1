namespace QuizServer.Application.Quizzes.GetAllQuiz;

public sealed record GetAllQuizQueryResponse(
    Guid Id,
    string Title,
    int RoomNumber);