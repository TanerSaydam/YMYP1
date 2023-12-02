using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ITDeskServer.Models;

public sealed class AppUser : IdentityUser<Guid>
{    
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    [NotMapped]
    public override bool PhoneNumberConfirmed { get; set; }

    public string GetName()
    {
        return string.Join(" ", FirstName, LastName);
    }
}
