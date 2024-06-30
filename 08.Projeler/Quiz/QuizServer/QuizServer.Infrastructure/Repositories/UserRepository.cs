using Microsoft.EntityFrameworkCore;
using QuizServer.Domain.Users;
using QuizServer.Infrastructure.Context;

namespace QuizServer.Infrastructure.Repositories;
internal sealed class UserRepository(
    ApplicationDbContext context) : IUserRepository
{
    public async Task<bool> CreateAsync(User user, CancellationToken cancellationToken = default)
    {
        await context.AddAsync(user, cancellationToken);
        var result = await context.SaveChangesAsync(cancellationToken);

        return result > 0;
    }

    public async Task<User?> GetByUserNameAndPasswordAsync(UserName userName, Password password, CancellationToken cancellationToken = default)
    {
        return await context.Users.FirstOrDefaultAsync(p => p.UserName == userName && p.Password == password, cancellationToken);
    }

    public async Task<bool> IsUserNameExistsAsync(UserName userName, CancellationToken cancellationToken = default)
    {
        return await context.Users.AnyAsync(p => p.UserName == userName, cancellationToken);
    }
}
