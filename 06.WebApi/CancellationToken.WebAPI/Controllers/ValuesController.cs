using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CancellationToken.WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get(System.Threading.CancellationToken cancellationToken)
    {
        await Task.Delay(5000, cancellationToken);
        List<string> names = new() { "Taner", "Can", "Ramazan" };

        return Ok(names);
    }
}
