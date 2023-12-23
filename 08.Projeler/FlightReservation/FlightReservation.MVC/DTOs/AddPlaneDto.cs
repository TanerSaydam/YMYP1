namespace FlightReservation.MVC.DTOs;

public sealed record AddPlaneDto(
    string Name,
    string TailNumber,
    int TotalSeats,
    string SeatConfiguration);