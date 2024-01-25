using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstAspNetWebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ValuesController : ControllerBase
{
    [HttpGet("[action]")] 
    public IActionResult QueryParams(int id, string name, int age)
    {
        var request = HttpContext.Request;
        return Ok(new { Message = "Api Çalışıyor!" });
    }

    [HttpGet("[action]/{id}/{name}/{age}")]
    public IActionResult RoutingParams(int id, string name, int age)
    {
        var request = HttpContext.Request;
        return Ok(new { Message = "Api Çalışıyor!" });
    }

    [HttpPost("[action]")]
    public IActionResult NotParameterPostRequest()
    {
        return Ok(new { Message = "Bunda parametre yok hacı" });
    }

    [HttpPost("[action]")]
    public IActionResult PostRequest(EnesinEliRequestDto request)
    {
        return Ok(new { Message = "Baban zengin gözüküyor!" });
    }

    [HttpPut("Update")]
    public IActionResult Update(EnesinEli enesinEli)
    {
        return Ok(new { Message = "Update edeceğim..." });
    }

    [HttpDelete("[action]")]
    public IActionResult Delete(int id)
    {
        EnesinEli enesinEli = new()
        {
            ElinCizgileri = ""
        };

        //databade kayıt işlemi

        return Ok(new { Message = "Delete edeceğim..." });
    }
}

public class EnesinEliRequestDto
{
    public EnesinEli El1 { get; set; }
    public EnesinEli El2 { get; set; }
}
public class EnesinEli
{
    public string ElinCizgileri { get; set; }
}