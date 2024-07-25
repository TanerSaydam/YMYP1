using QuizServer.Domain.Shared;

namespace QuizServer.Application.Services;
public interface IUserContext
{
    Identity GetUserId();
}
