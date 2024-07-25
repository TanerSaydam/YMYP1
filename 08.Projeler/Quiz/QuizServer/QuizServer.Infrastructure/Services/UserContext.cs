using Microsoft.AspNetCore.Http;
using QuizServer.Application.Services;
using QuizServer.Domain.Shared;
using System.Security.Claims;

namespace QuizServer.Infrastructure.Services;
internal sealed class UserContext(
    IHttpContextAccessor httpContextAccessor) : IUserContext
{
    public Identity GetUserId()
    {
        Claim? userIdClaim = httpContextAccessor.HttpContext!.User.Claims.FirstOrDefault(p => p.Type == ClaimTypes.NameIdentifier);

        if (userIdClaim is null)
        {
            throw new UnauthorizedAccessException();
        }

        string userIdString = userIdClaim.Value;

        Identity userId = new(Guid.Parse(userIdString));

        return userId;
    }
}
