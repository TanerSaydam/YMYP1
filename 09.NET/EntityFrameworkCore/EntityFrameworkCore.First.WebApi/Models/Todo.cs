using System.ComponentModel.DataAnnotations;

namespace EntityFrameworkCore.First.WebApi.Models;

public sealed class Todo
{
    [Key]
    public int Id { get; set; }
    public string Work {  get; set; } = string.Empty;
    public DateTime DateToBeCompleted { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime? DateCompleted { get; set; }
    public bool IsCompleted { get; set; } = false;
}
