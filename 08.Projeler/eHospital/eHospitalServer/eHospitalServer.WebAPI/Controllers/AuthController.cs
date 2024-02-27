using eHospitalServer.Business.Services;
using eHospitalServer.Entities.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TS.Result;

namespace eHospitalServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController(
    IAuthService authService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Login(LoginRequestDto request, CancellationToken cancellationToken)
    {
        var response = await authService.LoginAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Get()
    {
        
        return Ok(new { Message = "Ok, I get it..." });
    }
}
