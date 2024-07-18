namespace QuizServer.Application.QuizDetails.GetAllQuizDetailByQuizId;

public sealed record GetAllQuizDetailByQuizIdResponse(
    Guid Id,
    string Title,
    string AnswerA,
    string AnswerB,
    string AnswerC,
    string AnswerD,
    string CorrectAnswer,
    sbyte TimeOut
    );