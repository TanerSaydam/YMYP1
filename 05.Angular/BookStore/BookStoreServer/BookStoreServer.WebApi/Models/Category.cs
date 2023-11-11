using System.ComponentModel.DataAnnotations;

namespace BookStoreServer.WebApi.Models;

public sealed class Category //Entity => Domain-Driven Design
{
    public int Id { get; set; } //Id varsa Database'de tablo olur.
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public bool IsDeleted { get; set; }
}