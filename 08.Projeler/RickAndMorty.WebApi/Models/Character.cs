namespace RickAndMorty.WebApi.Models;

public sealed class Character
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Species { get; set; } = string.Empty;
    public string? Type { get; set; }
    public string Gender { get; set; } = string.Empty;
    
    public int OriginId { get; set; }
    public Origin? Origin { get; set; }

    public int LocationId { get; set; }
    public Location? Location { get; set; }

    public string Image { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public DateTime Created { get; set;}

}
