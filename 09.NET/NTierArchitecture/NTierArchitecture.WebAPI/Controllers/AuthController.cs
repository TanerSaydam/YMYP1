using Microsoft.AspNetCore.Mvc;
using NTierArchitecture.Business.Services;
using NTierArchitecture.Entities.DTOs;

namespace NTierArchitecture.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController(AuthService authService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Login(LoginDto request)
    {
        var response = await authService.LoginAsync(request);

        return Ok(new { Response = response });
    }
}
