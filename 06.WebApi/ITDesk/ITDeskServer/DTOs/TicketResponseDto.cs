namespace ITDeskServer.DTOs;

public sealed record TicketResponseDto 
{
    public Guid Id { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string CreatedDate { get; set; } = string.Empty;
    public bool IsOpen { get; set; }
}
    
