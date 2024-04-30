using Microsoft.EntityFrameworkCore;
using RealWorld.WebAPI.Context;
using RealWorld.WebAPI.Models;

namespace RealWorld.WebAPI.Repositories;

public sealed class UserRepository(
    ApplicationDbContext context) : IUserRepository
{
    public async Task<bool> CreateAsync(User user, CancellationToken cancellationToken = default)
    {
        await context.AddAsync(user, cancellationToken);
        var result = await context.SaveChangesAsync(cancellationToken);
        return result > 0;
    }

    public async Task<bool> DeleteAsync(User user, CancellationToken cancellationToken = default)
    {
        context.Remove(user);
        var result = await context.SaveChangesAsync(cancellationToken);
        return result > 0;
    }

    public async Task<List<User>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.Users.ToListAsync(cancellationToken);
    }

    public async Task<User?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await context.Users.FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
    }

    public async Task<bool> NameIsExists(string name, CancellationToken cancellationToken = default)
    {
        return await context.Users.AnyAsync(p=> p.Name == name, cancellationToken);
    }

    public async Task<bool> UpdateAsync(User user, CancellationToken cancellationToken = default)
    {
        context.Update(user);
        var result = await context.SaveChangesAsync(cancellationToken);
        return result > 0;
    }
}
