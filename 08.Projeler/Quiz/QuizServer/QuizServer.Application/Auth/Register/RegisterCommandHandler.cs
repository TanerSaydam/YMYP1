using MediatR;
using QuizServer.Domain.Users;
using TS.Result;

namespace QuizServer.Application.Auth.Register;

internal sealed class RegisterCommandHandler(
    IUserRepository userRepository) : IRequestHandler<RegisterCommand, Result<string>>
{
    public async Task<Result<string>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        UserName userName = new(request.UserName);
        Password password = new(request.Password);

        var isUserNameExists = await userRepository.IsUserNameExistsAsync(userName, cancellationToken);

        if (isUserNameExists)
        {
            return Result<string>.Failure("User name already exists");
        }

        User user = new(userName, password);
        bool result = await userRepository.CreateAsync(user, cancellationToken);
        if (!result)
        {
            return Result<string>.Failure("Something went wrong");
        }

        return "User create is successful";
    }
}
