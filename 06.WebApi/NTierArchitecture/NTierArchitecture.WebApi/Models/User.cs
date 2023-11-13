using System.ComponentModel.DataAnnotations;

namespace NTierArchitecture.WebApi.Models;

public sealed class User
{
    public User()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public byte[] PasswordHash { get; set; } = new byte[64];
    public byte[] PasswordSalt { get; set; } = new byte[128];
}

