using Microsoft.AspNetCore.Mvc;
using ODataExample2.MinimalAPI.AOP;
using ODataExample2.MinimalAPI.Context;

namespace ODataExample2.MinimalAPI.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class PersonelsController : ControllerBase
{
    [HttpGet]
    [EnableQueryWithMetadataAttribute]
    public IActionResult GetAll()
    {
        ApplicationDbContext context = new();
        return Ok(context.Personels);
    }

}
