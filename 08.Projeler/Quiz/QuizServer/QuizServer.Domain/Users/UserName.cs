namespace QuizServer.Domain.Users;

public record UserName
{
    public UserName(string value)
    {
        if (value.Length < 3)
        {
            throw new ArgumentException("User name must be at least 3 character");
        }

        Value = value;
    }
    public string Value { get; init; }
}
