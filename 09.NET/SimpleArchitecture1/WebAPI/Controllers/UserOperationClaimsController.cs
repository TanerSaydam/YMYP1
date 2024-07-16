using Business.Repositories.UserOperationClaimRepository;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UserOperationClaimsController : ControllerBase
{
    private readonly IUserOperationClaimService _userOperationClaimService;

    public UserOperationClaimsController(IUserOperationClaimService userOperationClaimService)
    {
        _userOperationClaimService = userOperationClaimService;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Add(UserOperationClaim userOperationClaim)
    {
        var result = await _userOperationClaimService.Add(userOperationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Update(UserOperationClaim userOperationClaim)
    {
        var result = await _userOperationClaimService.Update(userOperationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Delete(UserOperationClaim userOperationClaim)
    {
        var result = await _userOperationClaimService.Delete(userOperationClaim);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetList()
    {
        var result = await _userOperationClaimService.GetList();
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }

    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _userOperationClaimService.GetById(id);
        if (result.Success)
        {
            return Ok(result);
        }
        return BadRequest(result.Message);
    }
}
