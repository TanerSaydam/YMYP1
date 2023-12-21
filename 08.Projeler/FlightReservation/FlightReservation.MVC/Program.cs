using FlightReservation.MVC.Context;
using FlightReservation.MVC.Models;
using FlightReservation.MVC.Services;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Globalization;
using System.Reflection;

#region DI
var builder = WebApplication.CreateBuilder(args);

#region Localization
builder.Services.AddSingleton<LanguageService>();
builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.AddMvc()
    .AddViewLocalization()
    .AddDataAnnotationsLocalization(options =>
    options.DataAnnotationLocalizerProvider = (type, factory) =>
    {
        var assemblyName = new AssemblyName(typeof(SharedResource).GetTypeInfo().Assembly.FullName ?? "");
        return factory.Create(nameof(SharedResource), assemblyName.Name ?? "");
    });

builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    var supportCultures = new List<CultureInfo>
    {
        new CultureInfo("en-US"),
        new CultureInfo("tr-TR")
    };

    options.DefaultRequestCulture = new RequestCulture(culture: "tr-TR", uiCulture: "tr-TR");
    options.SupportedCultures = supportCultures;
    options.SupportedUICultures = supportCultures;
    options.RequestCultureProviders.Insert(0, new QueryStringRequestCultureProvider());
});
#endregion

#region Context
builder.Services.AddDbContext<ApplicationDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});
#endregion

#region Authentication
builder.Services.AddAuthentication("CookieAuth").AddCookie("CookieAuth",configuration =>
{
    configuration.AccessDeniedPath = "/Account/Login";
    configuration.LoginPath = "/Account/Login";
    configuration.ExpireTimeSpan = TimeSpan.FromHours(1);
    configuration.Cookie.Name = "UserLoginCookie";
});
#endregion

#region UI
builder.Services.AddControllersWithViews();
#endregion
#endregion

#region Middleware
var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

#region Localization
app.UseRequestLocalization(app.Services.GetRequiredService<IOptions<RequestLocalizationOptions>>().Value);
#endregion


app.UseRouting();

app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    if (!context.Set<User>().Any(p => p.Email == "y225012058@sakarya.edu.tr"))
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
#endregion

