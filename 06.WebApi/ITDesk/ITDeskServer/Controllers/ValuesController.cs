using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ITDeskServer.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
[Authorize(AuthenticationSchemes = "Bearer")] //attribute
public sealed class ValuesController : ControllerBase
{
    [HttpGet]    
    public IActionResult Get()
    {
        return Ok(new { Message = "Api çalışıyor!" });
    }
}
