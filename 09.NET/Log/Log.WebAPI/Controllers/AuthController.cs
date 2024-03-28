using Log.WebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Log.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpGet]
    [AllowAnonymous]
    public IActionResult CreateToken()
    {
        JwtProvider jwtProvider = new();
        return Ok(jwtProvider.CreateToken());
    }
}
