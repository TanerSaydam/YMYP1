using FlightReservation.MVC.DTOs;
using FlightReservation.MVC.Models;
using FlightReservation.MVC.Repositories;
using System.Security.Claims;

namespace FlightReservation.MVC.Controllers;

[Authorize]
public class HomeController(
    UserRepository userRepository,
    RouteRepository routeRepository,
    TicketRepository ticketRepository) : Controller
{    
    public IActionResult Index()
    {
        string userId = User.Claims.FirstOrDefault(p=> p.Type == ClaimTypes.NameIdentifier)!.Value;
        List<string> userRoles = userRepository.GetUserRoleByUserId(Guid.Parse(userId));
        if (userRoles.Contains("Admin"))
        {
            return RedirectToAction("Index", "Admin");
        }

        ViewBag.Date = DateTime.Now;   

        return View(new List<Route>());
    }

    [HttpPost]
    public IActionResult Index(GetRouteDto request)
    {    
        ViewBag.Departure = request.Departure;
        ViewBag.Arrival = request.Arrival;
        ViewBag.Date = request.Date;
        IEnumerable<Route> routes = routeRepository.GetRoutesByParameter(request);
              
        return View(routes);
    }

    [HttpPost]
    public IActionResult AddTicket(AddTicketDto request)
    {
        string? userId = User.Claims.Where(p => p.Type == ClaimTypes.NameIdentifier).Select(s => s.Value).FirstOrDefault();

        if (userId is not null)
        {
            Ticket ticket = new()
            {
                RouteId = request.RouteId,
                SeatNumber = request.SeatNumber,
                UserId = Guid.Parse(userId),
            };

            ticketRepository.Add(ticket);
        }

        return RedirectToAction("Index", "Tickets");
    }
}
