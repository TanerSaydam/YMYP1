using FlightReservation.MVC.DTOs;
using FlightReservation.MVC.Models;
using FlightReservation.MVC.Repositories;

namespace FlightReservation.MVC.Controllers;
public class RoutesController(RouteRepository routeRepository) : Controller
{
    public IActionResult Index()
    {
        IEnumerable<Route> routes = routeRepository.GetAll();
        IEnumerable<Plane> planes = routeRepository.GetlAllPlane();
        RouteDto response = new() { Planes = planes, Routes = routes }; 
        return View(response);
    }

    [HttpPost]
    public IActionResult Add(AddRouteDto request)
    {
        Route route = new()
        {
            Arrival = request.Arrival,
            Departure = request.Departure,
            ArrivalTime = request.ArrivalTime,
            DepartureTime = request.DepartureTime,
            PlaneId = request.PlaneId
        };

        routeRepository.Add(route);

        return RedirectToAction("Index");
    }

    [HttpGet]
    public IActionResult RemoveById(Guid id)
    {
        routeRepository.RemoveById(id);
        return RedirectToAction("Index");
    }
         
}
