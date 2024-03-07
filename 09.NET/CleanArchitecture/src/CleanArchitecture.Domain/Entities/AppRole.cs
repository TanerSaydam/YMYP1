using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace CleanArchitecture.Domain.Entities;
public sealed class AppRole : IdentityRole<Guid>
{
    public string Code { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    [NotMapped]
    public override string? ConcurrencyStamp { get; set; }
}
