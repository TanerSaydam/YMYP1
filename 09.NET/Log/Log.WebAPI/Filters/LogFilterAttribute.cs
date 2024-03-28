using Microsoft.AspNetCore.Mvc.Filters;
using System.Security.Claims;
using System.Text.Json;

namespace Log.WebAPI.Filters;

public sealed class LogFilterAttribute : Attribute, IActionFilter
{
    public void OnActionExecuted(ActionExecutedContext context)
    {
        //throw new NotImplementedException();
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        object log = new
        {
            MethodName = context.HttpContext.Request.Path.Value,
            Body = JsonSerializer.Serialize(context.ActionArguments.First().Value),
            UserName = context.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier),
            Date = DateTime.Now,
        };

        //Db ye Kayıt
    }
}
