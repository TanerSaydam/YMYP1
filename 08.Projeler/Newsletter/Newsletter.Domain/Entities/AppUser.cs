using Microsoft.AspNetCore.Identity;

namespace Newsletter.Domain.Entities;
public sealed class AppUser : IdentityUser<Guid>
{
}