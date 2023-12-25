namespace FlightReservation.MVC.DTOs;

public sealed record GetRouteDto(
    string Departure,
    string Arrival,
    DateTime Date);
