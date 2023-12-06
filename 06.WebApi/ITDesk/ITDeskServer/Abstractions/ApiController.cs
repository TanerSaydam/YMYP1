using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ITDeskServer.Abstractions;
[Route("api/[controller]/[action]")]
[ApiController]
[Authorize(AuthenticationSchemes = "Bearer")] //attribute
public abstract class ApiController: ControllerBase
{
}
