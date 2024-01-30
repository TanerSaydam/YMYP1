using AutoMapper;
using FluentValidation.Results;
using GenericFileService.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonelApp.WebAPI.DTOs;
using PersonelApp.WebAPI.Models;
using PersonelApp.WebAPI.Validators;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;

namespace PersonelApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class PersonelsController : ControllerBase
{
    static List<Personel> personels = new();
    private readonly IMapper _mapper;
    public PersonelsController(IMapper mapper)//constructor
    {
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(personels);
    }

    [HttpPost]
    public IActionResult Add([FromForm] PersonelDto request)
    {
        string fileName = "";

        if (request.File is not null)
        {
            fileName = FileService.FileSaveToServer(request.File, "wwwroot/");
        }

        //PersonelDtoValidator validator = new();
        //ValidationResult result = validator.Validate(request);
        //if (!result.IsValid)
        //{
        //    return BadRequest(result.Errors.Select(s=> s.ErrorMessage));
        //}       

        Personel personel = _mapper.Map<Personel>(request);
        personel.Avatar = fileName;

        Personel? lastPersonel = personels.OrderBy(p => p.Id).LastOrDefault();
        if(lastPersonel is null)
        {
            personel.Id = 1;
        }
        else
        {
            personel.Id = lastPersonel.Id + 1;
        }

        personel.CreatedDate = DateTime.Now;
        personels.Add(personel);

        return Ok(new { Message = "Api Çalışıyor" });
    }

    [HttpPut]
    public IActionResult Update(int id, [FromForm] PersonelDto request)
    {
        Personel? personel = personels.FirstOrDefault(p=> p.Id == id);

        if(personel is null)
        {
            return BadRequest(new { Message = "Böyle bir personel bulunamadı!" });
        }

        _mapper.Map(request, personel);
        if(request.File is not null)
        {
            FileService.FileDeleteToServer("wwwroot/" + personel.Avatar);

            string fileName = FileService.FileSaveToServer(request.File, "wwwroot/");
            personel.Avatar = fileName;
        }

        return NoContent();
    }

    [HttpDelete] 
    public IActionResult DeleteById(int id)
    {
        Personel? personel = personels.Find(p => p.Id == id);
        if(personel is null)
        {
            return BadRequest(new { Message = "Personel kaydı bulunamadı" });
        }
        if (!string.IsNullOrEmpty(personel.Avatar))
        {
            FileService.FileDeleteToServer("wwwroot/" + personel.Avatar);
        }
        
        personels.Remove(personel);
        return NoContent();
    }

    [HttpPost] 
    public IActionResult FileMethod(List<IFormFile> file)
    {
        //Fiziki bir klasöre kaydedebilirsiniz
        //FTP'ye kaydedebilirsiniz
        //Byte'a çevirip metin olarak saklarız.
        //Cloud'a kaydedebiliriz
        //Bir yükleme sitesine API ya da kütüphane aracılığı ile yükleyip onun linkini saklayabiliriz


        foreach(var f in file){            
            byte[] bytes = FileService.FileConvertByteArrayToDatabase(f);
            
            //77 90 144 => exe
            using MemoryStream memoryStream = new MemoryStream();
            f.CopyTo(memoryStream);
            byte[] array = memoryStream.ToArray();
            string text = Convert.ToBase64String(array);

            using (var fileStream = new FileStream("wwwroot/test.xlsx", FileMode.Create))
            {
                fileStream.Write(bytes, 0, bytes.Length);
            }

            //FileStream stream = System.IO.File.Create("wwwroot/deneme.jpg");
            //f.CopyTo(stream);
        }
        
        return NoContent();
    }
}
