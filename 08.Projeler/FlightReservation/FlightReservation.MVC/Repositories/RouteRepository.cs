using FlightReservation.MVC.Context;
using FlightReservation.MVC.DTOs;
using FlightReservation.MVC.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightReservation.MVC.Repositories;

public sealed class RouteRepository(ApplicationDbContext context)
{
    public IEnumerable<Route> GetAll()
    {
        return context.Set<Route>().Include(p=> p.Plane).OrderByDescending(order => order.DepartureTime).ToList();
    }

    public IEnumerable<Route> GetRoutesByParameter(GetRouteDto request)
    {
        return context.Set<Route>()
            .Where(p => 
                   p.Departure == request.Departure && 
                   p.Arrival == request.Arrival && 
                   p.DepartureTime.Date == request.Date.Date)
            .Include(p=> p.Plane)
            .OrderBy(p => p.DepartureTime)
            .ToList();
    }

    public IEnumerable<Plane> GetlAllPlane()
    {
        return context.Set<Plane>().OrderBy(p => p.Name).ToList();
    }

    public void Add(Route route)
    {
        context.Add(route);
        context.SaveChanges();
    }

    public void RemoveById(Guid id)
    {
        Route? route = context.Set<Route>().Find(id);
        if(route is not null)
        {
            context.Remove(route);
            context.SaveChanges();
        }
    }
}
