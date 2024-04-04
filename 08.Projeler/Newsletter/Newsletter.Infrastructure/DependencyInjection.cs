using GenericRepository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;
using Newsletter.Infrastructure.Context;
using Newsletter.Infrastructure.Repositories;
using Scrutor;

namespace Newsletter.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services, 
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseInMemoryDatabase(configuration.GetConnectionString("InMemory") ?? "");
        });

        services.AddIdentityCore<AppUser>().AddEntityFrameworkStores<ApplicationDbContext>();

        services.AddScoped<IUnitOfWork>(srv => srv.GetRequiredService<ApplicationDbContext>());

        services.AddScoped<IBlogRepository, BlogRepository>();
        services.AddScoped<ISubscribeRepository, SubscribeRepository>();

        //services.Scan(action =>
        //    action
        //    .FromAssemblies(AppDomain.CurrentDomain.GetAssemblies())
        //    .AddClasses(publicOnly: false)
        //    .UsingRegistrationStrategy(RegistrationStrategy.Skip)
        //    .AsImplementedInterfaces()
        //    .WithScopedLifetime());


        return services;        
    }
}
