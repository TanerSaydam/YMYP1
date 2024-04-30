using RealWorld.WebAPI.Models;

namespace RealWorld.WebAPI.Services;

public interface IUserService
{
    Task<List<User>> GetAllAsync(CancellationToken cancellationToken = default);
}
