namespace PermitRequestApp.Domain.ADUsers;
public interface IADUserRepository
{
    IQueryable<ADUser> GetAllUsers();
}
