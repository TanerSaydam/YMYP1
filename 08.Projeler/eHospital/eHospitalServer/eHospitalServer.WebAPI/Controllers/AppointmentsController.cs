using eHospitalServer.Business.Services;
using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Models;
using eHospitalServer.WebAPI.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TS.Result;

namespace eHospitalServer.WebAPI.Controllers;

public sealed class AppointmentsController(
    IUserService userService,
    IAppointmentService appointmentService) : ApiController
{
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreatePatient(CreatePatientDto request, CancellationToken cancellationToken)
    {
        var response = await userService.CreatePatientAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Create(CreateAppointmentDto request, CancellationToken cancellationToken)
    {
        var response = await appointmentService.CreateAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    } //22:15 görüşelim

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Complete(CompleteAppointmentDto request, CancellationToken cancellationToken)
    {
        var response = await appointmentService.CompleteAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }
    
    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAllByDoctorId(Guid doctorId, CancellationToken cancellationToken)
    {
        var response = await appointmentService.GetAllByDoctorIdAsync(doctorId, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> FindPatientByIdentityNumber(FindPatientDto request, CancellationToken cancellationToken)
    {
        var response = await appointmentService.FindPatientByIdentityNumberAsync(request, cancellationToken);

        return StatusCode(response.StatusCode, response);
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAllDoctors(CancellationToken cancellationToken)
    {
        Result<List<User>> response = await appointmentService.GetAllDoctorsAsync(cancellationToken);

        return StatusCode(response.StatusCode, response);
    }
}
