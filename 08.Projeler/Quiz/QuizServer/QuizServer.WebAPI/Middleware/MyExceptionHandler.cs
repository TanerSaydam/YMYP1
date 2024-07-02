using Microsoft.AspNetCore.Diagnostics;
using System.Text.Json;
using TS.Result;

namespace QuizServer.WebAPI.Middleware;

public sealed class MyExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        Result<bool> result = Result<bool>.Failure(exception.Message);

        httpContext.Response.StatusCode = result.StatusCode;
        httpContext.Response.ContentType = "application/json";
        await httpContext.Response.WriteAsync(JsonSerializer.Serialize(result));

        return true;
    }
}
