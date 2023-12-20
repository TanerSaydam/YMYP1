using FlightReservation.MVC.Context;
using FlightReservation.MVC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});

builder.Services.AddAuthentication().AddCookie(configuration=>
{
    configuration.AccessDeniedPath = "/Account/Login";
    configuration.LoginPath = "/Account/Login";
    configuration.ExpireTimeSpan = TimeSpan.FromHours(1);
});

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    if(!context.Set<User>().Any(p=> p.Email == "y225012058@sakarya.edu.tr"))
    {
        User user = new()
        {
            FirstName = "Ýhsan Eren",
            LastName = "Delibaþ",
            Email = "y225012058@sakarya.edu.tr",
            Password = "sau"
        };

        context.Set<User>().Add(user);

        Role? role = context.Set<Role>().Where(p => p.Name == "Admin").FirstOrDefault();

        if (role is null)
        {
            role = new()
            {
                Name = "Admin"
            };
            context.Set<Role>().Add(role);            
        }

        context.Set<UserRole>().Add(new()
        {
            RoleId = role.Id,
            UserId = user.Id
        });
    }
}

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
}

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
