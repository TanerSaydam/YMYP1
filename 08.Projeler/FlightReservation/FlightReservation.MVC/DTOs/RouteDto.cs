using FlightReservation.MVC.Models;

namespace FlightReservation.MVC.DTOs;

public sealed record RouteDto
{
    public IEnumerable<Route> Routes { get; set; } = new List<Route>();
    public IEnumerable<Plane> Planes { get; set; } = new List<Plane>();
}
