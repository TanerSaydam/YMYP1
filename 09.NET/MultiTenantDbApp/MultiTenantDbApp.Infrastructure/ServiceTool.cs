using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using MultiTenantDbApp.Domain.Master.Entities;
using MultiTenantDbApp.Infrastructure.Context;

namespace MultiTenantDbApp.Infrastructure;
public static class ServiceTool
{
    public static ServiceProvider ServiceProvider { get; private set; } = default!;
    public static IServiceCollection AddServiceTool(this IServiceCollection services)
    {
        ServiceProvider = services.BuildServiceProvider();
        return services;
    }

    public static string GetConnectionString()
    {
        HttpContextAccessor httpContextAccessor = new();
        string? companyId = httpContextAccessor.HttpContext.Request.Headers.First(p => p.Key == "CompanyId").Value;

        if (companyId is null)
        {
            throw new ArgumentException("Company not found!");
        }

        var provider = ServiceTool.ServiceProvider;
        var context = provider.GetRequiredService<ApplicationDbContext>();
        Company? company = context.Companies.FirstOrDefault(p => p.Id.ToString() == companyId);

        if (company is null)
        {
            throw new ArgumentException("Company not found!");
        }
        return company.ConnectionString;
    }
}
