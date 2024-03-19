using Microsoft.AspNetCore.Mvc.Filters;
using System.Diagnostics;

namespace CleanArchitecture.Presentation.Filters;

public class TestFilter1Attribute : Attribute, IActionFilter, IAuthorizationFilter
{
    private readonly Stopwatch stopwatch;
    public TestFilter1Attribute()
    {
        
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        stopwatch.Stop();
        Console.WriteLine("Ending..." + stopwatch.ElapsedMilliseconds);
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        stopwatch.Start();
        //loglama

        //cacheleme
        Console.WriteLine("Starting...");
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        //authorization
    }
}
