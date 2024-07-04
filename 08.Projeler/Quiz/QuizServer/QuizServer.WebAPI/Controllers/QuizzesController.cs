using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuizServer.Application.Quizzes.CreateQuiz;
using QuizServer.Application.Quizzes.GetAllQuiz;
using QuizServer.Application.Quizzes.GetParticipantsByRoomNumber;

namespace QuizServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class QuizzesController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(CreateQuizCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        GetAllQuizQuery request = new();
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    public async Task<IActionResult> GetParticipantsByRoomNumber(int roomNumber, CancellationToken cancellationToken)
    {
        GetParticipantsByRoomNumberQuery request = new(roomNumber);
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
