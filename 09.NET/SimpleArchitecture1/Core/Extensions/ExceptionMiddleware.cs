using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace Core.Extensions;
public class ExceptionMiddleware
{
    private RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception e)
        {
            await HandleExceptionAsync(httpContext, e);
        }
    }

    private Task HandleExceptionAsync(HttpContext httpContext, Exception e)
    {
        httpContext.Response.ContentType = "application/json";
        httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        string message = "Internal Server Error";
        IEnumerable<ValidationFailure> errors;
        if (e.GetType() == typeof(ValidationException))
        {
            message = e.Message;
            errors = ((ValidationException)e).Errors;

            return httpContext.Response.WriteAsync(new ValidationErrorDetails
            {
                Errors = errors,
                Message = message,
                StatusCode = 400
            }.ToString());
        }

        return httpContext.Response.WriteAsync(new ErrorHandlerDetails
        {
            StatusCode = httpContext.Response.StatusCode,
            Message = e.Message,
        }.ToString());
    }
}
