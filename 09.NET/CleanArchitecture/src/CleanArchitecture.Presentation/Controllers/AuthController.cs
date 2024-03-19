using CleanArchitecture.Application.Features.Auth.Register;
using CleanArchitecture.Presentation.Abstractions;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using FluentEmail.Core;
using FluentEmail.Core.Models;
using CleanArchitecture.Application.Utilities;

namespace CleanArchitecture.Presentation.Controllers;

public sealed class AuthController : ApiController
{
    private readonly IFluentEmail _fluentEmail;
    public AuthController(IMediator mediator, IFluentEmail fluentEmail) : base(mediator)
    {
        _fluentEmail = fluentEmail;
    }

    [HttpPost]
    //[Validation<RegisterCommandValidator>]
    public async Task<IActionResult> Register(RegisterCommand request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }  
}
 