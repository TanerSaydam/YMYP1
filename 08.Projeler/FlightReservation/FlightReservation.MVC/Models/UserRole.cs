namespace FlightReservation.MVC.Models;

public sealed class UserRole
{
    public Guid UserId { get; set; } = Guid.NewGuid();
    public Guid RoleId { get; set; } = Guid.NewGuid();
    public Role? Role { get; set; }
}