using RealWorld.WebAPI.Dtos;
using RealWorld.WebAPI.Models;

namespace RealWorld.WebAPI.Services;

public interface IUserService
{
    Task<List<User>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<bool> CreateAsync(CreateUserDto request, CancellationToken cancellationToken = default);

    Task<bool> DeleteByIdAsync(int id, CancellationToken cancellationToken = default);
}
