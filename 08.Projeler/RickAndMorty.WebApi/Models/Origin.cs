namespace RickAndMorty.WebApi.Models;

public sealed class Origin
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}
