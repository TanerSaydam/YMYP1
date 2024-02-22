namespace PermitRequestApp.Domain.ADUsers;
public interface IADUserRepository
{
    IQueryable<ADUser> GetAllUsers();
    Task<ADUser?> GetByIdAsync(Guid employeeId, CancellationToken cancellationToken = default);
}
