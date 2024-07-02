using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuizServer.Application.QuizParticipants.JoinQuiz;

namespace QuizServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class QuizParticipantsController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Join(JoinQuizCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
