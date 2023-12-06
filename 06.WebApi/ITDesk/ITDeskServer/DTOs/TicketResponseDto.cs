namespace ITDeskServer.DTOs;

public sealed record TicketResponseDto(
    Guid Id,
    string Subject,
    DateTime CreatedDate,
    bool IsOpen);
