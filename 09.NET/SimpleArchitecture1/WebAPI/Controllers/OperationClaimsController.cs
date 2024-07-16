using Business.Repositories.OperationClaimRepository;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class OperationClaimsController : ControllerBase
{
    private readonly IOperationClaimService _operationClaimService;

    public OperationClaimsController(IOperationClaimService operationClaimService)
    {
        _operationClaimService = operationClaimService;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Add(OperationClaim operationClaim)
    {
        var result = await _operationClaimService.Add(operationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Update(OperationClaim operationClaim)
    {
        var result = await _operationClaimService.Update(operationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Delete(OperationClaim operationClaim)
    {
        var result = await _operationClaimService.Delete(operationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]")]
    //[Authorize(Roles = "GetList")]
    public async Task<IActionResult> GetList()
    {
        var result = await _operationClaimService.GetList();
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _operationClaimService.GetById(id);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

}
