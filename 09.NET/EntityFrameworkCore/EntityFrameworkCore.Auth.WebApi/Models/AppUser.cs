using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityFrameworkCore.Auth.WebApi.Models;

[Index("Email",IsUnique=true)]
public sealed class AppUser
{
    [Key]
    [Column(Order =0)]
    public Guid Id { get; set; }

    [Column(Order = 1, TypeName = "varchar(50)")]
    [Required(ErrorMessage = "FirstName is required")]
    public string FirstName { get; set; } = string.Empty;

    [Column(Order = 2, TypeName = "varchar(50)")]
    [Required(ErrorMessage = "LastName is required")]
    public string LastName { get; set; } = string.Empty;

    [Column(Order = 4, TypeName = "varchar(20)")]
    public string? PhoneNumber { get; set; }

    [Required]
    [Column(Order = 5)]
    public byte[] PasswordSalt { get; set; } = new byte[64];

    [Required]
    [Column(Order = 6)]
    public byte[] PasswordHash { get; set; } = new byte[128];

    [Column(Order = 3,TypeName = "varchar(300)")]
    [Required]
    public string Email { get; set; } = string.Empty;

    
}
