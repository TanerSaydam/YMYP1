using Microsoft.AspNetCore.Mvc;
using Portfolio.WebApi.Context;
using Portfolio.WebApi.Models;

namespace Portfolio.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    public ValuesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult CreateMyInformation(MyInformationDto request)
    {

        MyInformation myInformation = _context.MyInformations.FirstOrDefault();
        if(myInformation is null)
        {
            myInformation = new();
            myInformation.Name = request.Name;
            myInformation.Description = request.Description;
            myInformation.Lastname = request.Lastname;
            myInformation.Email = request.Email;
            _context.Add(myInformation);
        }
        else
        {
            myInformation.Name = request.Name;
            myInformation.Description = request.Description;
            myInformation.Lastname = request.Lastname;
            myInformation.Email = request.Email;
            _context.Update(myInformation);
        }
       
        _context.SaveChanges();

        return NoContent();
    }

    [HttpGet]
    public IActionResult GetMyInformation()
    {
        var response = _context.MyInformations.FirstOrDefault();
        return Ok(response);
    }

    [HttpPost]
    public IActionResult CreateSkills(string name)
    {
        MySkill mySkill = _context.MySkills.Where(p=> p.Name == name).FirstOrDefault();
        if(mySkill is not null)
        {
            return BadRequest(new { Message = "Bu yetenek daha önce kaydedilmiş!" });
        }

        mySkill = new MySkill();
        mySkill.Name = name;

        _context.Add(mySkill);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpGet]
    public IActionResult GetSkills()
    {
        var response = _context.MySkills.ToList();
        return Ok(response);
    }
}
