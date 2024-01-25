using GenericFileService.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonelApp.WebAPI.DTOs;
using PersonelApp.WebAPI.Models;

namespace PersonelApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class PersonelsController : ControllerBase
{
    List<Personel> personels;
    public PersonelsController()//constructor
    {
        personels = new();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(personels);
    }

    [HttpPost]
    public IActionResult Add([FromForm] PersonelDto request)
    {

        string fileName = FileService.FileSaveToServer(request.File, "wwwroot/");

        Personel personel = new()
        {
            Avatar = fileName,
            Email = request.Email,
            FirstName = request.Name1,
            LastName = request.Name2
        };

        Personel? lastPersonel = personels.OrderBy(p => p.Id).LastOrDefault();
        if(lastPersonel is null)
        {
            personel.Id = 1;
        }
        else
        {
            personel.Id = lastPersonel.Id + 1;
        }

        personels.Add(personel);

        return Ok(new { Message = "Api Çalışıyor" });
    }
}
