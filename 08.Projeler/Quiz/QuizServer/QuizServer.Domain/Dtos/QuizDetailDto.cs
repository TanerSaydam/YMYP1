namespace QuizServer.Domain.Dtos;
public sealed record QuizDetailDto(
    Guid Id,
    string Title,
    string AnswerA,
    string AnswerB,
    string AnswerC,
    string AnswerD,
    string CorrectAnswer,
    sbyte TimeOut
    );