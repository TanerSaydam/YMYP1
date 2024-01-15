using EntityFrameworkCore.OnModelCreating.WebApi.Abstractions;

namespace EntityFrameworkCore.OnModelCreating.WebApi.Models;

public sealed class User : Entity
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;    
    public string Email {  get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}