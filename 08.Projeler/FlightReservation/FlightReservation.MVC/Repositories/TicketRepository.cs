using FlightReservation.MVC.Context;
using FlightReservation.MVC.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightReservation.MVC.Repositories;

public sealed class TicketRepository(ApplicationDbContext context) 
{
    public void Add(Ticket ticket)
    {
        context.Add(ticket);
        context.SaveChanges();
    }

    public List<Ticket> GetAll(Guid userId)
    {
        return 
            context.Set<Ticket>()
            .Where(p=> p.UserId == userId)
            .Include(p=> p.User)
            .Include(p=> p.Route)
            .ThenInclude(p=> p!.Plane)
            .ToList();
    }
}
