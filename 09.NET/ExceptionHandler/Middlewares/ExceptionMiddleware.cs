
using Newtonsoft.Json;

namespace ExceptionHandler.Middlewares;

public class ExceptionMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
		try
		{
			await next(context);
		}
		catch (Exception ex)
		{
			context.Response.StatusCode = 500;
			context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(new ErrorResult(ex.Message).ToString());			
		}
    }
}

public class ErrorResult
{
    public ErrorResult(string message)
    {
        Message = message;
    }
    public string Message { get; private set; }

    public override string ToString()
    {
        return JsonConvert.SerializeObject(this);   
    }
}
