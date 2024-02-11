using AutoMapper;
using NTierArchitecture.Entities.DTOs;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.Business.Mapping;
public sealed class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateStudentDto, Student>();
        CreateMap<UpdateStudentDto, Student>();

        CreateMap<CreateClassRoomDto, ClassRoom>();
        CreateMap<UpdateClassRoomDto, ClassRoom>();
    }
}
