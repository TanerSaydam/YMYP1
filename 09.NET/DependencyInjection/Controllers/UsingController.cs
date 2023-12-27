using Microsoft.AspNetCore.Mvc;

namespace DependencyInjection.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UsingController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        //İşlem

        //using (Test test = new())
        //{
        //    test.Metot();
        //}

        Test test = new Test();
        test.Metot();
        test.Dispose();

        //using Test test = new();

        //test.Metot();

        //işlem
        //işlem
        //işlem
        //işlem
        //işlem
        //işlem
        return NoContent();
    }
}

public class Test : IDisposable
{
    public Test()
    {
        
    }
    public void Dispose()
    {
       //işlemler
    }

    public void Metot()
    {

    }
}
