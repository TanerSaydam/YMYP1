using Microsoft.AspNetCore.Diagnostics;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Middleware;

public class ExcepitonMiddleware : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return true;
    }
}
