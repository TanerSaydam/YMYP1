using ITDeskServer.Models;

namespace ITDeskServer.DTOs;

public sealed record TicketResponseDto 
{
    public Guid Id { get; set; }
    public Guid AppUserId { get; set; }
    public string? UserName { get; set; }
    public AppUser? AppUser { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string CreatedDate { get; set; } = string.Empty;
    public bool IsOpen { get; set; }
}
    
