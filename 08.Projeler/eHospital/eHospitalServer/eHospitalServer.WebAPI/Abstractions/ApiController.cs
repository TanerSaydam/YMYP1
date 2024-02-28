using Microsoft.AspNetCore.Mvc;

namespace eHospitalServer.WebAPI.Abstractions;

[Route("api/[controller]/[action]")]
[ApiController]
public abstract class ApiController : ControllerBase
{
}
