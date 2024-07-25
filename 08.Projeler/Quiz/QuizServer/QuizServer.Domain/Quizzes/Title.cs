namespace QuizServer.Domain.Quizes;

public sealed record Title
{
    private Title(string value)
    {
        Value = value;
    }
    public string Value { get; private set; } = default!;

    public static Title Create(string value)
    {
        if (value.Length < 5)
        {
            throw new ArgumentException("Quiz başlığı 5 karakterden büyük olmalıdır");
        }

        if (value.Length > 200)
        {
            throw new ArgumentException("Quiz başlığı 200 karakterden küçük olmalıdır");
        }

        Title title = new(value);

        return title;
    }
};
