using EntityFrameworkCore.First.WebApi.Context;
using EntityFrameworkCore.First.WebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkCore.First.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class TodosController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        ApplicationDbContext context = new();
        List<Todo> todos = context.Todos.ToList();
        //context.Set<Todo>().ToList();

        return Ok(todos);
    }
}
