using Ardalis.SmartEnum;

namespace QuizServer.Domain.QuizDetails;

public sealed class CorrectAnswer : SmartEnum<CorrectAnswer>
{
    public static CorrectAnswer CorrectAnswerA = new("A", 1);
    public static CorrectAnswer CorrectAnswerB = new("B", 2);
    public static CorrectAnswer CorrectAnswerC = new("C", 3);
    public static CorrectAnswer CorrectAnswerD = new("D", 4);
    public CorrectAnswer(string name, int value) : base(name, value)
    {
    }
}
