using AutoMapper;
using EntityFrameworkCoreGrup2.Linq.WebAPI.Context;
using EntityFrameworkCoreGrup2.Linq.WebAPI.DTOs;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Mapper;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateCategoryDto, Category>();
    }
}
