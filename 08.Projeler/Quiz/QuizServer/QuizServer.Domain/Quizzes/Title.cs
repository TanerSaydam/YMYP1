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
            throw new ArgumentException("Title must be greater than 5 chracters");
        }

        if (value.Length > 200)
        {
            throw new ArgumentException("Title must be less than 200 chracters");
        }

        Title title = new(value);

        return title;
    }
};
