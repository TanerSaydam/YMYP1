using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityFrameworkCore.Auth.WebApi.Models;

[Index("Name", IsUnique = true)]
public sealed class Role
{
    [Key]
    public Guid Id { get; set; }
    [Column(TypeName = "varchar(50)")]
    [Required]    
    public string Name { get; set; } = string.Empty;
}
