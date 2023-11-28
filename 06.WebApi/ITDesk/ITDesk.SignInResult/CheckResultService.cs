using Microsoft.AspNetCore.Mvc;

namespace ITDesk.SignInResultNameSpace;
public class CheckResultService : ControllerBase
{
    public IActionResult PasswordResult(Microsoft.AspNetCore.Identity.SignInResult result, DateTimeOffset? lockOutEnd)
    {
        

        return Ok();
    }
}
