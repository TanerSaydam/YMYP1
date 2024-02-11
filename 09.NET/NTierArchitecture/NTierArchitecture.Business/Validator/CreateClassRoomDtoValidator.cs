using FluentValidation;
using NTierArchitecture.Entities.DTOs;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.Business.Validator;
public sealed class CreateClassRoomDtoValidator : AbstractValidator<CreateClassRoomDto>
{
    public CreateClassRoomDtoValidator()
    {
        RuleFor(p => p.Name).NotEmpty().MinimumLength(3);
    }
}
