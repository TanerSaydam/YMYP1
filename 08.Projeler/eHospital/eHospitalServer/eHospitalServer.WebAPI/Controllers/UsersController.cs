using eHospitalServer.Business.Services;
using eHospitalServer.Entities.DTOs;
using eHospitalServer.WebAPI.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eHospitalServer.WebAPI.Controllers;
public sealed class UsersController(
    IUserService userService) : ApiController
{
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Create(CreateUserDto request, CancellationToken cancellationToken)
    {
        var response = await userService.CreateUserAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }
}
