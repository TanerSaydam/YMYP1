using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuizServer.Application.QuizDetails.CreateQuizDetail;

namespace QuizServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class QuizDetailsController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(CreateQuizDetailCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
