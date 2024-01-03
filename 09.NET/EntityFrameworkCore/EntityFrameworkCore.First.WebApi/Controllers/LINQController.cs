using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkCore.First.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class LINQController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        //ApplicationDbContext context = new();
        //List<Todo> todos = context.Todos.ToList();
        //context.Set<Todo>().ToList();


        //List<string> names = new();
        //names.Add("Taner");
        //names.Remove("Taner");
        //List<string> newNames = names.Where(p => p == "Taner").ToList();
        //string? newName = names.FirstOrDefault(p => p == "Taner");
        //string? newName2 = names.SingleOrDefault(p => p == "Taner");
        //string? newName3 = names.Where(p => p == "Taner").FirstOrDefault();


        //List<Example> examples = new();
        //var newExample = examples.Select(s => new NewExample()
        //{
        //    Name = string.Join(" ",s.FirstName, s.LastName),
        //    Age = s.Age,
        //    City = "Kayseri"
        //}).ToList();


        //int result = examples.Sum(s => s.Age);

        //int count = examples.Count();

        //ApplicationDbContext context = new();
        //var todos = context.Todos.AsQueryable();

        //todos.Where(p => p.IsCompleted);

        return Ok();
    }
}

//LINQ Language Integrated Query

public class Example
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public int Age { get; set; }
}

public class NewExample
{
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; }
    public string City { get; set; } = string.Empty;
}
