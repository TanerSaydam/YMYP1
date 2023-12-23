using FlightReservation.MVC.Context;
using FlightReservation.MVC.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightReservation.MVC.Repositories;

public sealed class UserRepository(ApplicationDbContext context)
{    
    public User? GetUserByEmail(string email)
    {
        return context.Set<User>().Where(p=> p.Email == email).FirstOrDefault();
    }

    public User? GetUserByEmailAndPassword(string email, string password)
    {
        return context.Set<User>().Where(p=> p.Email == email && p.Password == password).FirstOrDefault();
    }

    public void Add(User user)
    {
        context.Add(user);
        context.SaveChanges();
    }

    public List<string> GetUserRoleByUserId(Guid userId)
    {
        return context.Set<UserRole>().Where(p=> p.UserId == userId).Include(p=> p.Role).Select(s=> s.Role!.Name).ToList();
    }
}
