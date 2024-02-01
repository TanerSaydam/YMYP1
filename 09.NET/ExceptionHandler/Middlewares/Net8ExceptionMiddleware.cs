using ExceptionHandler.Controllers;
using Microsoft.AspNetCore.Diagnostics;

namespace ExceptionHandler.Middlewares;

public class Net8ExceptionMiddleware : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception ex, CancellationToken cancellationToken)
    {
        if(ex.GetType() == typeof(ArgumentException))
        {
            context.Response.StatusCode = 500;
        }

        if(ex.GetType() == typeof(Exception))
        {
            context.Response.StatusCode = 400;
        }

        if (ex.GetType() == typeof(UnauthorizedAccessException))
        {
            context.Response.StatusCode = 401;
        }
        if (ex.GetType() == typeof(TanerException))
        {
            context.Response.StatusCode = 301;
        }

        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync(new ErrorResult(ex.Message).ToString());

        return true;
    }
}
