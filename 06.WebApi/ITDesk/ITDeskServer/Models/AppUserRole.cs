using Microsoft.AspNetCore.Identity;

namespace ITDeskServer.Models;

public sealed class AppUserRole
{
    public Guid RoleId { get; set; }
    public AppRole? Role { get; set; }
    public Guid UserId { get; set; }
}
