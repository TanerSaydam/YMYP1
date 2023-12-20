namespace FlightReservation.MVC.Models;

public sealed class Plane
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string TailNumber { get; set; } = string.Empty;
    public int TotalSeats { get; set; } = 0;
    public string SeatConfiguration { get; set; } = string.Empty; //3-3 3-4-3 2-5-2 2-4-2
}