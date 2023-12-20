namespace FlightReservation.MVC.Models;

public sealed class Role
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
}
