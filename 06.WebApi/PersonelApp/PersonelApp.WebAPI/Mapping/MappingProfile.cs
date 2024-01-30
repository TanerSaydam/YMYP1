using AutoMapper;
using PersonelApp.WebAPI.DTOs;
using PersonelApp.WebAPI.Models;

namespace PersonelApp.WebAPI.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<PersonelDto, Personel>();
    }
}
