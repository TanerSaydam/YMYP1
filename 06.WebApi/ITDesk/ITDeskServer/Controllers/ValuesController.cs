using ITDeskServer.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ITDeskServer.Controllers;


public sealed class ValuesController : ApiController
{
    [HttpGet]    
    public IActionResult Get()
    {
        return Ok(new { Message = "Api çalışıyor!" });
    }
}
