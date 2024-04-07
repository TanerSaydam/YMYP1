using AutoMapper;
using Newsletter.Application.Features.Blogs.Create;
using Newsletter.Domain.Entities;

namespace Newsletter.Application.Profiles;
public sealed class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateBlogCommand, Blog>().ForMember(p=> p.IsPublish, options=>
        {
            options.MapFrom(p => p.IsPublish == "on");
        }).ReverseMap();
    }
}
