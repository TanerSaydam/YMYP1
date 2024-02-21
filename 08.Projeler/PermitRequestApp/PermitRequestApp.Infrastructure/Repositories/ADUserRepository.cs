using Microsoft.EntityFrameworkCore;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Infrastructure.Context;

namespace PermitRequestApp.Infrastructure.Repositories;
internal sealed class ADUserRepository(
    ApplicationDbContext context) : IADUserRepository
{
    public IQueryable<ADUser> GetAllUsers()
    {
        return context.Set<ADUser>().AsNoTracking().AsQueryable();
    }
}
