using AutoMapper;
using Newsletter.Application.Features.Blogs.Create;
using Newsletter.Domain.Entities;

namespace Newsletter.Application.Profiles;
public sealed class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateBlogCommand, Blog>();
    } //22:20 görüşelim
}
