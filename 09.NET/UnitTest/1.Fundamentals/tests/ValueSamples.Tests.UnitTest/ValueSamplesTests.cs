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

    //out ref
    //public void TestMethod()
    //{
    //    int a = 10;
    //    Test2(ref a);

    //    Console.WriteLine(a);
    //}

    //public void Test2(ref int x)
    //{
    //    x += 10;
    //}
}



