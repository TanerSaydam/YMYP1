using MediatR;
using Microsoft.AspNetCore.Mvc;
using PermitRequestApp.Application.Features.LeaveRequests.AnswerLeaveRequest;
using PermitRequestApp.Application.Features.LeaveRequests.CreateLeaveRequest;
using PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;

namespace PermitRequestApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class LeaveRequestsController(
    IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(CreateLeaveRequestCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        if (!response.IsSuccess)
        {
            return BadRequest(response);
        }
        
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> GetAllByManagerId(GetAllLeaveRequestsByManagerIdQuery request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        if (!response.IsSuccess)
        {
            return BadRequest(response);
        }

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> Answer(AnswerLeaveRequestCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        if (!response.IsSuccess)
        {
            return BadRequest(response);
        }

        return Ok(response);
    }
}
