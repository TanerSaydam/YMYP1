namespace FlightReservation.MVC.DTOs;

public sealed record RegisterDto(
    string FirstName,
    string LastName,
    string Email,
    string Password);
