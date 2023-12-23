using FlightReservation.MVC.Context;
using FlightReservation.MVC.Models;

namespace FlightReservation.MVC.Repositories;

public sealed class PlaneRepository(ApplicationDbContext context)
{
    public IEnumerable<Plane> GetAll()
    {
        return context.Set<Plane>().OrderBy(p=> p.Name).ToList();
    }

    public void Add(Plane plane)
    {
        context.Set<Plane>().Add(plane);
        context.SaveChanges();
    }

    public bool CheckTailNumberExist(string tailNumber)
    {
        return context.Set<Plane>().Any(p => p.TailNumber == tailNumber);
    }

    public void RemoveById(Guid id)
    {
        Plane? plane = context.Set<Plane>().Find(id);
        if(plane is not null)
        {
            context.Remove(plane);
            context.SaveChanges();
        }
    }
}
