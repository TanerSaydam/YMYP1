namespace CalculatorLibrary;
public sealed class ValueSamples
{
    public string FullName = "Taner Saydam";

    public int Age = 34;

    public User user = new()
    {
        Fullname = "Taner Saydam",
        Age = 34,
        DateOfBirth = new(1989, 09, 03)
    };
}

public sealed class User
{
    public string Fullname { get; set; } = string.Empty;
    public int Age { get; set; }
    public DateOnly DateOfBirth { get; set; }
}