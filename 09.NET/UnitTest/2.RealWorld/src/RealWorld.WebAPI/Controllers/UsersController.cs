using Microsoft.AspNetCore.Mvc;
using RealWorld.WebAPI.Services;

namespace RealWorld.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class UsersController(
    IUserService userService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        var result = await userService.GetAllAsync(cancellationToken);

        return Ok(result);
    }
}
