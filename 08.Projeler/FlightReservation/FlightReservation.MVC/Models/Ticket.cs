namespace FlightReservation.MVC.Models;

public sealed class Ticket
{
    public Ticket()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public Guid RouteId { get; set; }
    public Route? Route { get; set; }
    public int SeatNumber { get; set; }
}
