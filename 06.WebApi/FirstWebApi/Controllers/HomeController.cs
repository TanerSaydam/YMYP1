using GenericFileService.Files;
using Microsoft.AspNetCore.Mvc;

namespace FirstWebApi.Controllers;
[ApiController]
[Route("api/[controller]/[action]")] ///www.taner.com/home/Get
public sealed class HomeController : ControllerBase
{   

    private readonly Test _test;

    public HomeController(Test test)
    {
        _test = test;
    }

    [HttpGet] //metot tipleri
    public IActionResult Get()
    {
        Test test = new(); //instance türetmek
        test.Age = 1;
        test.Name = "Taner";

        return NoContent();
    }

    [HttpGet]
    public string Get2()
    {
        return "Taner Saydam";
    }


    [HttpPost]
    public IActionResult SaveFile([FromForm] IFormFile file)
    {
        string fileName1 = FileService.FileSaveToServer(file, "./wwwroot/files/");
        string fileName2 = FileService.FileSaveToServer(file, "C:/YMYP1/05.Angular/file-management-app/src/assets/files/");

        return Ok(file);
    }

    [HttpPost]
    public IActionResult SaveFiles(List<IFormFile> files)
    {
        foreach (var item in files)
        {
            string fileName1 = FileService.FileSaveToServer(item, "./wwwroot/files/");
            string fileName2 = FileService.FileSaveToServer(item, "C:/YMYP1/05.Angular/file-management-app/src/assets/files/");
        }
        return Ok(files);
    }

    [HttpPost]
    public IActionResult SaveWithFile([FromForm] Test2 test)
    {
        string fileName1 = FileService.FileSaveToServer(test.File, "./wwwroot/files/");
        string fileName2 = FileService.FileSaveToServer(test.File, "C:/YMYP1/05.Angular/file-management-app/src/assets/files/");
        return Ok();
    }


    [HttpPost]
    public IActionResult SaveWithFileS([FromForm] Test3 test)
    {
        foreach (var item in test.Files)
        {
            string fileName1 = FileService.FileSaveToServer(item, "./wwwroot/files/");
            string fileName2 = FileService.FileSaveToServer(item, "C:/YMYP1/05.Angular/file-management-app/src/assets/files/");
        }
        return Ok();
    }
}

//bir veya daha fazla değişkenin bir arada bulunduğu grup oluşturmak istiyorsam class oluşturuyorum
public class Test
{
    public string Name { get; set; } //bu değişkeni bir property yapıyor
    public int Age;
}

public class Test2
{
    public IFormFile File { get; set; }
    public int Id { get; set; }
}

public class Test3
{
    public List<IFormFile> Files { get; set; }
    public int Id { get; set; }
}

