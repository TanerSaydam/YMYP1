using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Models;

public sealed class Product : Entity
{    
    public string Name { get; set; } = string.Empty;
}
