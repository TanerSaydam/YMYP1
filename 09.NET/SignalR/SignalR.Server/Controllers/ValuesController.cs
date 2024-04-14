using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR.Server.Hubs;

namespace SignalR.Server.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController(
    IHubContext<ChatHub> hubContext) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Send(string message)
    {
        //işlemimizi gerçekleştiriyoruz

        await hubContext.Clients.All.SendAsync("ReceiveMessage",message);

        return NoContent();

    }
}
