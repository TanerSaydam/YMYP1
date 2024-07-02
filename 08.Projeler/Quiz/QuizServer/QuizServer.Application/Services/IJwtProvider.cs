using QuizServer.Domain.Users;

namespace QuizServer.Application.Services;
public interface IJwtProvider
{
    string CreateToken(User user);
}
