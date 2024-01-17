using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Models;

public sealed class User : Entity
{    
    public string Name { get; set; } = string.Empty;
}
