using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace Log.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class ProductsController: ControllerBase
{
    [HttpGet]
    public IActionResult Create(string name)
    {
        Serilog.Log.Information("Starting creating...");
        //Kayıt
        Serilog.Log.Information("Creating is finish");

        return NoContent();
    }

    [HttpGet]
    public IActionResult Update(int id, string name)
    {

        //Update

        return NoContent();
    }

    [HttpGet]
    public IActionResult DeleteByıd(int id)
    {
        //Delete

        return NoContent();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        //GetAll

        return Ok();
    }
}
