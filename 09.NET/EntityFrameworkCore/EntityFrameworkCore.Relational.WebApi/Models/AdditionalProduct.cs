using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityFrameworkCore.Relational.WebApi.Models;

public sealed class AdditionalProduct
{
    [Key]
    public Guid ProductId { get; set; }
    //[DeleteBehavior(DeleteBehavior.NoAction)]
    //public Product? Product { get; set; }
    [Column(TypeName = "varchar(150)")]
    public string? Description { get; set; }
    [Column(TypeName = "money")]
    [Required]
    public decimal Price { get; set; }
}