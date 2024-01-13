namespace RickAndMorty.WebApi.Models;

public sealed class Episode
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateOnly Air_Date { get; set; }
    public string EpisodeNumber { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public DateTime Created { get; set; }

    public List<EpisodeCharacter>? EpisodeCharacters { get; set; }
}
