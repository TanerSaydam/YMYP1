namespace ValueSamples.Tests.UnitTest;

using CalculatorLibrary;
using FluentAssertions;
using ValueSamples = CalculatorLibrary.ValueSamples;
public class ValueSamplesTests
{
    //Arrange
    private readonly ValueSamples _sut = new();

    [Fact]
    public void StringAssertionExample()
    {
        //Act
        var fullName = _sut.FullName;

        //Assert
        fullName.Should().Be("Taner Saydam");
        fullName.Should().NotBeEmpty();
        fullName.Should().StartWith("Taner");
        fullName.Should().EndWith("Saydam");
    }

    [Fact]
    public void NumberAssertionExample()
    {
        //Act
        var age = _sut.Age;

        //Assert
        age.Should().Be(34);
        age.Should().BePositive();
        age.Should().BeGreaterThan(20);
        age.Should().BeLessThanOrEqualTo(35);
        age.Should().BeInRange(20, 50);
    }

    [Fact]
    public void ObjectAssertionExample()
    {
        //Act
        var expedtedUser = new User()//içerisi birebir aynı, referans 101
        {
            Fullname = "Taner Saydam",
            Age = 34,
            DateOfBirth = new(1989, 09, 03)
        };

        var user = _sut.user;//referans 102

        //Assert
        user.Should().BeEquivalentTo(expedtedUser); 
    }

    [Fact]
    public void EnumerableObjectAssertionExample()
    {
        //Arrange
        var expected = new User
        {
            Fullname = "Taner Saydam",
            Age = 34,
            DateOfBirth = new(1989, 09, 03)
        };

        //Act
        var users = _sut.Users.As<User[]>();

        //Assert
        users.Should().ContainEquivalentOf(expected);
        users.Should().HaveCount(3);
        users.Should().Contain(x => x.Fullname.StartsWith("Tahir") && x.Age > 5);
    }

    [Fact]
    public void EnumerableNumberAssertionExample()
    {
        //Act
        var numbers = _sut.Numbers.As<int[]>();

        //Assert
        numbers.Should().Contain(5);
    }


    [Fact]
    public void ExceptionThrownAssertionExample()
    {
        //Act 
        Action result = () => _sut.Divide(1,0);

        //Assert
        result.Should().Throw<DivideByZeroException>();
            //.WithMessage("Attempted to divide by zero.");
    }

    [Fact]
    public void EventRaisedAssertionExample()
    {
        //Arrange
        var monitorSubject = _sut.Monitor();

        //Act
        _sut.RaiseExampleEvent();

        //Assert
        monitorSubject.Should().Raise("ExampleEvent");
    }

    [Fact]
    public void TestingInternalMembersExample()
    {
        //Act
        var number = _sut.InternalSecretNumber;

        //Assert
        number.Should().Be(42);
    }
}



