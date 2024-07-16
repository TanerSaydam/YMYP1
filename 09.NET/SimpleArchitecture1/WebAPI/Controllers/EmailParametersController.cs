using Business.Repositories.EmailParameterRepository;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class EmailParametersController : ControllerBase
{
    private readonly IEmailParameterService _emailParameterService;

    public EmailParametersController(IEmailParameterService emailParameterService)
    {
        _emailParameterService = emailParameterService;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Add(EmailParameter emailParameter)
    {
        var result = await _emailParameterService.Add(emailParameter);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Update(EmailParameter emailParameter)
    {
        var result = await _emailParameterService.Update(emailParameter);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Delete(EmailParameter emailParameter)
    {
        var result = await _emailParameterService.Delete(emailParameter);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetList()
    {
        var result = await _emailParameterService.GetList();
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _emailParameterService.GetById(id);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }
}
