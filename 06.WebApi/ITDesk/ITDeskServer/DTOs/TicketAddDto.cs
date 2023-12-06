namespace ITDeskServer.DTOs;

public sealed record TicketAddDto(
    string Subject,
    string Summary,
    List<IFormFile>? Files);
