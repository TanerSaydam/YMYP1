using eHospitalServer.Entities.Enums;
using eHospitalServer.Entities.Models;
using Microsoft.AspNetCore.Identity;

namespace eHospitalServer.WebAPI.Middlewares;

public static class ExtensionsMiddleware
{
    public static void CreateFirstUser(WebApplication app)
    {
        using (var scoped = app.Services.CreateScope())
        {
            var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<User>>();

            if (!userManager.Users.Any(p => p.UserName == "admin"))
            {
                User user = new()
                {
                    UserName = "admin",
                    Email = "admin@admin.com",
                    FirstName = "Taner",
                    LastName = "Saydam",
                    IdentityNumber = "11111111111",
                    FullAddress = "Kayseri",
                    DateOfBirth = DateOnly.Parse("03.09.1989"),
                    EmailConfirmed = true,
                    IsActive = true,
                    IsDeleted = false,
                    BloodType = "0 rh+",
                    UserType = UserType.Admin
                };

                userManager.CreateAsync(user, "1").Wait();
            }
        }
    }
}