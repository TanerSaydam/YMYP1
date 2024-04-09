using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Newsletter.Application;
using Newsletter.Domain.Entities;
using Newsletter.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddHttpContextAccessor();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(configure =>
{
    configure.Cookie.Name = "Newsletters.Auth";
    configure.LoginPath = "/Auth/Login";
    configure.LogoutPath = "/Auth/Login";
    configure.AccessDeniedPath = "/Auth/Login";
});
builder.Services.AddAuthorization();

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

app.UseAuthentication();
app.UseAuthorization();

using (var scoped = app.Services.CreateScope())
{
    var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
    if (!userManager.Users.Any())
    {
        AppUser appUser = new()
        {
            Email = "tanersaydam@gmail.com",
            UserName = "tsaydam",
        };

        userManager.CreateAsync(appUser, "Password12*").Wait();
    }
}

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
