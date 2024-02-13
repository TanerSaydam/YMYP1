using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NTierArchitecture.Business.Services;
using NTierArchitecture.Entities.DTOs;

namespace NTierArchitecture.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
[Authorize(AuthenticationSchemes ="Bearer")]
public sealed class ClassRoomsController    
    (IClassRoomService classRoomService): ControllerBase
{
    [HttpPost]
    public IActionResult Create(CreateClassRoomDto request)
    {
        string message = classRoomService.Create(request);
        return Ok(new { Message = message });
    }

    [HttpPost]
    public IActionResult Update(UpdateClassRoomDto request)
    {
        string message = classRoomService.Update(request);
        return Ok(new { Message = message });
    }

    [HttpGet("{id}")]
    public IActionResult DeleteById(Guid id) //?id=asdasd => query Params || /asdasdasd => routing params
    {
        string message = classRoomService.DeleteById(id);
        return Ok(new { Message = message });
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var response = classRoomService.GetAll();
        return Ok(response);
    }
}
