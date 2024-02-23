using AutoMapper;
using PermitRequestApp.Application.Features.LeaveRequests.CreateLeaveRequest;
using PermitRequestApp.Domain.LeaveRequests;

namespace PermitRequestApp.Application.Mapping;
public sealed class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateLeaveRequestCommand, LeaveRequest>();
    }
}
