using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizServer.Application.Quizzes.ChangeQuizIsStart;
using QuizServer.Application.Quizzes.ChangeQuizTitle;
using QuizServer.Application.Quizzes.CreateQuiz;
using QuizServer.Application.Quizzes.DeleteQuizById;
using QuizServer.Application.Quizzes.GetAllQuiz;
using QuizServer.Application.Quizzes.GetParticipantsByRoomNumber;
using QuizServer.Application.Quizzes.GetQuizById;

namespace QuizServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
[Authorize(AuthenticationSchemes = "Bearer")]
public sealed class QuizzesController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(CreateQuizCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    public async Task<IActionResult> GetById(Guid id, CancellationToken cancellationToken)
    {
        GetQuizByIdCommand request = new(id);
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

    [HttpPost]
    public async Task<IActionResult> ChangeTitle(ChangeQuizTitleCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    public async Task<IActionResult> DeleteById(DeleteQuizByIdCommand request, CancellationToken cancellationToken)
    {
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

    [HttpGet]
    public async Task<IActionResult> ChangeIsStart(int roomNumber, CancellationToken cancellationToken)
    {
        ChangeQuizIsStartCommand request = new(roomNumber);
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
