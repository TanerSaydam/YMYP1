using eHospitalServer.Business.Services;
using eHospitalServer.Entities.Models;
using eHospitalServer.WebAPI.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TS.Result;

namespace eHospitalServer.WebAPI.Controllers;

public sealed class DoctorsController(
    IUserService userService) : ApiController
{

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAllDoctors(CancellationToken cancellationToken)
    {
        Result<List<User>> response = await userService.GetAllDoctorsAsync(cancellationToken);

        return StatusCode(response.StatusCode, response);
    }
}
