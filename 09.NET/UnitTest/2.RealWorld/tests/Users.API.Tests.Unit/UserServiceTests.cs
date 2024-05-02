using FluentAssertions;
using FluentValidation;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using RealWorld.WebAPI.Dtos;
using RealWorld.WebAPI.Logging;
using RealWorld.WebAPI.Models;
using RealWorld.WebAPI.Repositories;
using RealWorld.WebAPI.Services;

namespace Users.API.Tests.Unit;

public class UserServiceTests
{
    private readonly UserService _sut;
    private readonly IUserRepository userRepository = Substitute.For<IUserRepository>();
    private readonly ILoggerAdapter<UserService> logger = Substitute.For<ILoggerAdapter<UserService>>();
    private readonly CreateUserDto createUserDto = new("Taner Saydam", 34, new(1989, 09, 03));
    public UserServiceTests()
    {
        _sut = new(userRepository, logger);
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnEmptyList_WhenNoUsersExist()
    {
        //Arrange
        userRepository.GetAllAsync().Returns(Enumerable.Empty<User>().ToList());

        //Act
        var result = await _sut.GetAllAsync();

        //Asset
        result.Should().BeEmpty();
    }

    [Fact]
    public async Task GetAllAsync_ShouldRetunsUsers_WhenSomeUserExist()
    {
        //Arrange
        var tanerUser = new User
        {
            Id = 1,
            Age = 34,
            Name = "Taner Saydam",
            DateOfBirth = new(1989, 09, 03)
        };

        var enesUser = new User
        {
            Id = 2,
            DateOfBirth = new(1996, 04, 25),
            Name = "Enes Demirtaþ",
            Age = 28
        };

        var users = new List<User>() { tanerUser, enesUser };

        userRepository.GetAllAsync().Returns(users);

        //Act
        var result = await _sut.GetAllAsync();

        //Assert
        result.Should().BeEquivalentTo(users);
        result.Should().HaveCount(2);
        result.Should().NotHaveCount(3);
    }

    [Fact]
    public async Task GetAllAsync_ShouldLogMessages_WhenInvoked()
    {
        //Arrange
        userRepository.GetAllAsync().Returns(Enumerable.Empty<User>().ToList());

        //Act
        await _sut.GetAllAsync();

        //Assert
        logger.Received(1).LogInformation(Arg.Is("Tüm userlar getiriliyor"));
        logger.Received(1).LogInformation(Arg.Is("Tüm user listesi çekildi"));
    }

    [Fact]
    public async Task GetAllAsync_ShouldLogMessageAnException_WhenExceptionIsThrown()
    {
        //Arrange
        var exception = new ArgumentException("User listesi geçerken bir hatayla karþýlaþtýk");
        userRepository.GetAllAsync().Throws(exception);

        //Act
        var requestAction = async () => await _sut.GetAllAsync();

        await requestAction.Should()
            .ThrowAsync<ArgumentException>();

        logger.Received(1).LogError(Arg.Is(exception), Arg.Is("User listesi geçerken bir hatayla karþýlaþtýk"));
    }

    [Fact]
    public async Task CreateAsync_ShouldThrownAnError_WhenUserCreateDetailAreNotValid()
    {
        //Arrange
        CreateUserDto request = new("",0,new(2007,01,01));

        //Act
        var action = async() => await _sut.CreateAsync(request);

        //Assert
        await action.Should().ThrowAsync<ValidationException>();

    }

    [Fact]
    public async Task CreateAsync_ShouldThrownAnError_WhenUserNameExist()
    {
        //Arrange
        userRepository.NameIsExists(Arg.Any<string>()).Returns(true);

        //Act
        var action = async () => await _sut.CreateAsync(new("Taner Saydam",34,new DateOnly(1989,09,03)));

        //Assert
        await action.Should().ThrowAsync<ArgumentException>();
    }

    [Fact]
    public void CreateAsync_ShouldCreateUserDtoToUserObject()
    {
        //Act
        var user = _sut.CreateUserDtoToUserObject(createUserDto);

        //Assert
        user.Name.Should().Be(createUserDto.Name);
        user.Age.Should().Be(createUserDto.Age);
        user.DateOfBirth.Should().Be(createUserDto.DateOfBirth);
    }

    [Fact]
    public async Task CreateAsync_ShouldCreateUser_WhenDetailsAreValidAndUnique()
    {
        //Arrange        
        userRepository.NameIsExists(createUserDto.Name).Returns(false);
        userRepository.CreateAsync(Arg.Any<User>()).Returns(true);

        //Act
        var result = await _sut.CreateAsync(createUserDto);

        //Asert
        result.Should().Be(true);
    }

    [Fact]
    public async Task CreateAsync_ShouldLogMessages_WhenInvoked()
    {
        //Arrage
        userRepository.NameIsExists(createUserDto.Name).Returns(false);
        userRepository.CreateAsync(Arg.Any<User>()).Returns(true);

        //Act
        await _sut.CreateAsync(createUserDto);

        //Asert
        logger.Received(1).LogInformation(
            Arg.Is("Kullanýcý adý: {0} bu olan kullanýcý kaydý yapýlmaya baþlandý."),
            Arg.Any<string>());

        logger.Received(1).LogInformation(
            Arg.Is("User Id: {0} olan kullanýcý {1}ms de oluþturuldu"),
            Arg.Any<int>(),
            Arg.Any<long>());//10:17 görüþelim
    }
}