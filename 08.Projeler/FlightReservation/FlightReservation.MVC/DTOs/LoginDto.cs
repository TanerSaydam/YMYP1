namespace FlightReservation.MVC.DTOs;

public sealed record LoginDto(
    string Email,
    string Password);
