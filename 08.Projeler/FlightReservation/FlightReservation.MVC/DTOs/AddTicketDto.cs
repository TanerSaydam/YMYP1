namespace FlightReservation.MVC.DTOs;

public sealed record AddTicketDto(
    Guid RouteId,
    int SeatNumber);
