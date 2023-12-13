using ITDeskServer.Context;
using ITDeskServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace ITDeskServer.Middleware;

public static class ExtensionsMiddleware
{
    public static void AutoMigration(WebApplication app)
    {
        using (var scoped = app.Services.CreateScope())
        {
            var context = scoped.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();
        }
    }

    public static void CreateFirstUser(WebApplication app)
    {
        using (var scoped = app.Services.CreateScope())
        {
            var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
            if (!userManager.Users.Any())
            {
                userManager.CreateAsync(new()
                {
                    Email = "test@test.com",
                    UserName = "test",
                    FirstName = "IT",
                    LastName = "Admin",
                    EmailConfirmed = true
                }, "Password12*").Wait();
            }
        }
    }

    public static void CreateRoles(WebApplication app)
    {
        using (var scoped = app.Services.CreateScope())
        {
            var roleManager = scoped.ServiceProvider.GetRequiredService<RoleManager<AppRole>>();
            if (!roleManager.Roles.Any())
            {
                roleManager.CreateAsync(new AppRole()
                {
                    Id = Guid.NewGuid(),
                    Name = "Admin",                   
                }).Wait();
            }
        }
    }

    public static void CreateUserRole(WebApplication app)
    {
        using (var scoped = app.Services.CreateScope())
        {
            var context = scoped.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
            var roleManager = scoped.ServiceProvider.GetRequiredService<RoleManager<AppRole>>();

            AppUser? user = userManager.Users.FirstOrDefault(p => p.Email == "test@test.com");
            if(user is not null)
            {
                AppRole? role = roleManager.Roles.FirstOrDefault(p => p.Name == "Admin");
                if(role is not null)
                {
                    bool userRoleExist = context.AppUserRoles.Any(p=> p.RoleId == role.Id && p.UserId == user.Id);
                    if (!userRoleExist)
                    {
                        AppUserRole appUserRole = new()
                        {
                            RoleId = role.Id,
                            UserId = user.Id,
                        };

                        context.AppUserRoles.Add(appUserRole);
                        context.SaveChanges();
                    }                   
                }
            }
        }
    }
}
