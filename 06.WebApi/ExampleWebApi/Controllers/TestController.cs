using Microsoft.AspNetCore.Mvc;

namespace ExampleWebApi.Controllers;

[Route("/api/Taner")]
[ApiController]
public class TestController : ControllerBase
{ 

    Response response = new();
    //Response _response;

    //public TestController(Response response)
    //{
    //    _response = response;
    //}

    //GET, PUT, Delete, POST, PATCH, ...

    [HttpPost] //HTTP Metotlar
    public IActionResult Hello(Request request) //endpoint
    {
        
        response.Message = "Hello World";
        return Ok(response);
    }
}

public class Request
{
    public Response Response { get; set; }
    public string Name { get; set;}
}

public class Response
{
    public string Message { get; set; }
}
