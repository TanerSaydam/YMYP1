using DomainDrivenDesign.Domain.Users;
using DomainDrivenDesign.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace DomainDrivenDesign.Infrastructure.Repositories;

public sealed class UserRepository(
    ApplicationDbContext context) : IUserRepository
{
    public async Task<User> CreateAsync(CreateUserDto request, CancellationToken cancellationToken = default)
    {
        User user = User.CreateUser(request.FullName, request.Email, request.Password, request.Country, request.City, request.Town, request.Street, request.FullAddress, request.EmailConfirmCode);

        await context.AddAsync(user, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);

        return user;
    }

    public Task<List<User>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public async Task<User?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        User? user = await context.Users.FirstOrDefaultAsync(p => p.Id == id, cancellationToken);

        return user;
    }

    public async Task<bool> IsEmailExistsAsync(string email, CancellationToken cancellationToken = default)
    {
        bool isEmailExists =
            await context.Users
            .AnyAsync(p => p.Email == new Email(email), cancellationToken);
        return isEmailExists;
    }
}
