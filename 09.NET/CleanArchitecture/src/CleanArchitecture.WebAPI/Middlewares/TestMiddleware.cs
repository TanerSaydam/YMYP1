
namespace CleanArchitecture.WebAPI.Middlewares;

public class TestMiddleware : IMiddleware
{
    public Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        throw new NotImplementedException();
    }
}
