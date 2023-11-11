using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodoWebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class TodosController : ControllerBase
{
    public static List<Todo> Todos = new()
    {
        new Todo { Id = 1, Work = "Get to work", IsCompleted = false },
        new Todo { Id = 2, Work = "Pick up groceries", IsCompleted = false },
        new Todo { Id = 3, Work = "Go home", IsCompleted = false },
        new Todo { Id = 4, Work = "Fall asleep", IsCompleted = false },
        new Todo { Id = 5, Work = "Get up", IsCompleted = true },
        new Todo { Id = 6, Work = "Brush teeth", IsCompleted = true },
        new Todo { Id = 7, Work = "Take a shower", IsCompleted = true },
        new Todo { Id = 8, Work = "Check e-mail", IsCompleted = true },
        new Todo { Id = 9, Work = "Walk dog", IsCompleted = true },
    }; //bunu database'e bağla

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(Todos);
    }

    [HttpGet("{id}")]
    public IActionResult ChangeCompleted(int id)
    {
        Todos.Where(p=> p.Id == id).FirstOrDefault().IsCompleted = !Todos.Where(p=> p.Id == id).FirstOrDefault().IsCompleted; //database de yap
        return Ok(Todos);
    }
}

public class Todo
{
    public int Id { get; set; }
    public string Work { get; set; }
    public bool IsCompleted { get; set; }
}