namespace EntityFrameworkCoreGrup2.Connection.WebAPI.Utilities;

public static class ServiceTool
{
    public static IServiceProvider? ServiceProvider { get; private set; }
    public static IServiceCollection CreateServiceTool(this IServiceCollection services)
    {
        ServiceProvider = services.BuildServiceProvider();
        return services;
    }
}
