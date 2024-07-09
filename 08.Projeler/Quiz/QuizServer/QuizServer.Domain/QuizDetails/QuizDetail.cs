using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;

namespace QuizServer.Domain.QuizDetails;
public sealed class QuizDetail : Entity
{
    public QuizDetail(Id quizId, Title title, Answer answerA, Answer answerB, Answer answerC, Answer answerD, CorrectAnswer correctAnswer, TimeOut timeOut)
    {
        QuizId = quizId;
        Title = title;
        AnswerA = answerA;
        AnswerB = answerB;
        AnswerC = answerC;
        AnswerD = answerD;
        CorrectAnswer = correctAnswer;
        TimeOut = timeOut;
    }

    public Id QuizId { get; private set; } = default!;
    public Title Title { get; private set; } = default!;
    public Answer AnswerA { get; private set; } = default!;
    public Answer AnswerB { get; private set; } = default!;
    public Answer AnswerC { get; private set; } = default!;
    public Answer AnswerD { get; private set; } = default!;
    public CorrectAnswer CorrectAnswer { get; private set; } = default!;
    public TimeOut TimeOut { get; private set; } = default!;
}
