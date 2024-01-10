using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityFrameworkCore.Relational.WebApi.Models;

[Index("Name", IsUnique=true)]
public class Product
{
    public Guid Id { get; set; }
    [Column(TypeName = "varchar(50)")]
    [Required]
    public string Name { get; set; } = string.Empty;        
    public AdditionalProduct? AdditionalProduct { get; set; }
    [ForeignKey("Category")]
    public Guid CategoryId { get; set; }
    [DeleteBehavior(DeleteBehavior.NoAction)]
    public Category? Category { get; set; }
}
