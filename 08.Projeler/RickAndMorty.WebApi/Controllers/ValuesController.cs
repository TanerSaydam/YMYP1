using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RickAndMorty.WebApi.Context;
using RickAndMorty.WebApi.DTOs;
using RickAndMorty.WebApi.Models;

namespace RickAndMorty.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ValuesController(
    HttpClient httpClient,
    ApplicationDbContext context) : ControllerBase
{    
    [HttpGet("[action]")]
    public async Task<IActionResult> GetAllUsingRickAndMortyAPI()
    {
        var response = await httpClient.GetAsync("https://rickandmortyapi.com/api/episode");

        EpisodeDto? episodeDto = await response.Content.ReadFromJsonAsync<EpisodeDto>();

        while (episodeDto!.Info.Next is not null)
        {
            basadon:
            List<Character> characters = new();
            List<Episode> episodes = new();

            //Karakterleri Kaydet
            foreach (var item in episodeDto!.Results)
            {
                foreach (var characterUrl in item.Characters)
                {
                    Character? character = context.Set<Character>().FirstOrDefault(p => p.Url == characterUrl);

                    if (character is not null) continue;

                    var characterResponse = await httpClient.GetAsync(characterUrl);

                    CharacterDto? characterDto = await characterResponse.Content.ReadFromJsonAsync<CharacterDto>();
                    if (characterDto is not null)
                    {
                        character = characters.FirstOrDefault(p => p.Name == characterDto.Name);

                        if (character is not null) continue;

                        character = new()
                        {
                            Created = characterDto.Created,
                            Gender = characterDto.Gender,
                            Image = characterDto.Image,
                            Name = characterDto.Name,
                            Species = characterDto.Species,
                            Status = characterDto.Status,
                            Type = characterDto.Type,
                            Url = characterDto.Url
                        };

                        Location? location =
                            context.Set<Location>()
                            .FirstOrDefault(p =>
                                            p.Url == characterDto.Location.Url &&
                                            p.Name == characterDto.Location.Name);

                        if (location is null)
                        {
                            location = new()
                            {
                                Url = characterDto.Location.Url,
                                Name = characterDto.Location.Name
                            };

                            context.Set<Location>().Add(location);
                            context.SaveChanges();

                            character.LocationId = location.Id;

                        }
                        else
                        {
                            character.LocationId = location.Id;
                        }


                        Origin? origin =
                            context.Set<Origin>()
                            .FirstOrDefault(p =>
                                            p.Url == characterDto.Location.Url &&
                                            p.Name == characterDto.Location.Name);

                        if (origin is null)
                        {
                            origin = new()
                            {
                                Url = characterDto.Origin.Url,
                                Name = characterDto.Origin.Name
                            };

                            context.Set<Origin>().Add(origin);
                            context.SaveChanges();

                            character.OriginId = origin.Id;
                        }
                        else
                        {
                            character.OriginId = origin.Id;
                        }

                        characters.Add(character);
                    }
                }
            }

            context.AddRange(characters);
            context.SaveChanges();

            //Bölümleri Kaydet
            foreach (var item in episodeDto!.Results)
            {
                Episode? episode = context.Set<Episode>().FirstOrDefault(p => p.EpisodeNumber == item.Episode);
                if (episode is not null) continue;

                episode = new()
                {
                    Air_Date = DateOnly.Parse(item.Air_Date),
                    Created = item.Created,
                    EpisodeNumber = item.Episode,
                    Name = item.Name,
                    Url = item.Url,
                };

                List<EpisodeCharacter> episodeCharacters = new();

                foreach (var url in item.Characters)
                {
                    Character? character = context.Set<Character>().FirstOrDefault(p => p.Url == url);
                    if (character is not null)
                    {
                        EpisodeCharacter episodeCharacter = new()
                        {
                            CharacterId = character.Id,
                        };
                        episodeCharacters.Add(episodeCharacter);
                    }
                }

                episode.EpisodeCharacters = episodeCharacters;
                episodes.Add(episode);
            }

            context.AddRange(episodes);
            context.SaveChanges();

            if (episodeDto!.Info.Next is null) break;
            response = await httpClient.GetAsync(episodeDto!.Info.Next);
            episodeDto = await response.Content.ReadFromJsonAsync<EpisodeDto>();
            if (episodeDto!.Info.Next is null) goto basadon;

        }
        

        return Ok(episodeDto);
    }

    [HttpGet("[action]")]
    public IActionResult GetAllEpisode()
    {
        List<ResultDto> episodes = 
            context.Set<Episode>()
            .Include(p=> p.EpisodeCharacters)!
            .ThenInclude(p=> p.Character)
            .Select(s=> new ResultDto(
                s.Id,
                s.Name,
                s.Air_Date.ToString(),
                s.EpisodeNumber,
                s.Url,s.Created, 
                s.EpisodeCharacters!.Select(p => p.Character!.Name).ToList()))
            .ToList();

        return Ok(episodes);
    }

    [HttpGet("[action]")]
    public IActionResult GetAllCharacter()
    {
        List<Character> characters = context.Set<Character>().OrderBy(p=> p.Name).ToList();
        return Ok(characters);
    }

}
