using EntityFrameworkCore.RepositoryPattern.WebApi.Context;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public interface IUnitOfWork
{
    int SaveChanges();
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
