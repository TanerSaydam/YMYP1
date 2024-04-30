using System.Reflection.Metadata;

namespace CalculatorLibrary;
public class ValueSamples
{
    public string FullName = "Taner Saydam";

    public int Age = 34;
   

    public User user = new()
    {
        Fullname = "Taner Saydam",
        Age = 34,
        DateOfBirth = new(1989, 09, 03)
    };

    public IEnumerable<User> Users = new[]
    {
        new User()
        {
            Fullname = "Taner Saydam",
            Age = 34,
            DateOfBirth = new(1989,09,03)
        },
        new User()
        {
            Fullname = "Tahir Saydam",
            Age = 7,
            DateOfBirth = new(2017,09,22)
        },
        new User()
        {
            Fullname = "Toprak Saydam",
            Age = 4,
            DateOfBirth = new(2019,09,05)
        }
    };

    public IEnumerable<int> Numbers = new[] { 5, 10, 25, 50 };

    public float Divide(int a, int b)
    {
        if(a == 0 || b == 0)
        {
            throw new DivideByZeroException();
        }

        return a / b;
    }

    public event EventHandler ExampleEvent;
    public virtual void RaiseExampleEvent()
    {
        ExampleEvent(this, EventArgs.Empty);
    }

    internal int InternalSecretNumber = 42;
}

public sealed class User
{
    public string Fullname { get; set; } = string.Empty;
    public int Age { get; set; }
    public DateOnly DateOfBirth { get; set; }
}