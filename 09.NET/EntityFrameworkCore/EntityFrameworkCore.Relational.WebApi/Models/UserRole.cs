using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityFrameworkCore.Relational.WebApi.Models;

public sealed class UserRole
{
    [Key]
    public Guid Id { get; set; }

    [ForeignKey("User")]   
    public Guid UserId { get; set; } //Id
    public User? User { get; set; }

    [ForeignKey("Role")]    
    public Guid RoleId { get; set; } //Id
    public Role? Role { get; set; }
}