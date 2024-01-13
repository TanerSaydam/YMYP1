namespace RickAndMorty.WebApi.Models;

public sealed class EpisodeCharacter
{    
    public int EpisodeId { get; set;} 
   
    public int CharacterId { get; set; }
    public Character? Character { get; set; }
}
