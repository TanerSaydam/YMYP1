using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PermitRequestApp.Application.Features.CumulativeLeaveRequests.GetAllCumulativeLeaveRequest;
using PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;

namespace PermitRequestApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class CumulativeLeaveRequestsController(
    IMediator mediator) : ControllerBase
{

    [HttpPost]
    public async Task<IActionResult> GetAll(GetAllCumulativeLeaveRequestQuery request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        if (!response.IsSuccess)
        {
            return BadRequest(response);
        }

        return Ok(response);
    }
}
