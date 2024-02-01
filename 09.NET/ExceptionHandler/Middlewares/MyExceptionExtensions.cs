namespace ExceptionHandler.Middlewares;

public static class MyExceptionExtensions
{
    public static IApplicationBuilder UseException(this IApplicationBuilder app)
    {
        app.UseMiddleware<ExceptionMiddleware>();

        return app;
    }
}
