using MediatR;
using Microsoft.AspNetCore.Mvc;
using PermitRequestApp.Application.Features.ADUsers.GetAllUsers;

namespace PermitRequestApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ADUsersController(
    IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        var response = await mediator.Send(new GetAllUsersQuery(), cancellationToken);

        if (!response.IsSuccess)
        {
            return BadRequest(response.Errors);
        }

        return Ok(response);
    }
}
