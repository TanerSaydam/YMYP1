using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuizServer.Application.QuizPages.AnswerQuestion;
using QuizServer.Application.QuizPages.GetParticipants;
using QuizServer.Application.QuizPages.GetQuestion;
using QuizServer.Application.QuizPages.GetQuestionTitle;
using QuizServer.Application.QuizPages.IsQuizStart;

namespace QuizServer.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class QuizPagesController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> GetQuestionTitle(GetQuestionTitleCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    public async Task<IActionResult> GetQuizDetailByRoomNumberAndQuestioNumber(GetQuizDetailByRoomNumberAndQuestioNumberCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    public async Task<IActionResult> AnswerQuestion(AnswerQuestionCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    public async Task<IActionResult> GetParticipants(GetParticipantsQuery request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    public async Task<IActionResult> IsQuizStart(int roomNumber, CancellationToken cancellationToken)
    {
        IsQuizStartQuery request = new(roomNumber);
        var response = await mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
