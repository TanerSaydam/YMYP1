using AutoMapper;
using BookStoreServer.WebApi.Dtos;
using BookStoreServer.WebApi.Models;

namespace BookStoreServer.WebApi.Maping;

public sealed class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<RegisterDto, User>();
        CreateMap<Book, BookDto>();        
    }
}
