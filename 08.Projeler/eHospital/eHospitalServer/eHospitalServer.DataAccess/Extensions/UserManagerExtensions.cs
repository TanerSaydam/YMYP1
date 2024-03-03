using eHospitalServer.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace eHospitalServer.DataAccess.Extensions;
public static class UserManagerExtensions
{
    public static async Task<User?> FindByIdentityNumber(this UserManager<User> userManager, string identityNumber)
    {
        return await userManager.Users.FirstOrDefaultAsync(p=> p.IdentityNumber == identityNumber);
    }
}
