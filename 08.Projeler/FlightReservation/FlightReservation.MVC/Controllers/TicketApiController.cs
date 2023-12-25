using FlightReservation.MVC.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlightReservation.MVC.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class TicketApiController(TicketRepository ticketRepository) : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll(Guid userId)
    {
        var response = ticketRepository.GetAll(userId);
        return Ok(response);
    }   
}
