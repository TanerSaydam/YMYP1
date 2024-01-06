using EntityFrameworkCore.First.WebApi.Context;
using EntityFrameworkCore.First.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace EntityFrameworkCore.First.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class TodosController(ApplicationDbContext context) : ControllerBase //primary constructor
{
    [HttpPost]  //Create  
    public IActionResult Add(AddTodoDto request)
    {
        Todo todo = new()
        {
            Work = request.Work.Trim(), //    asdasd  => asdasd
            DateToBeCompleted = request.DateToBeCompleted,
            CreationDate = DateTime.Now
        };

        //context.Todos.Add(todo);
        context.Add(todo);

        context.SaveChanges();

        return Ok(new { Id = todo.Id });
    }


    [HttpGet] //Read
    public IActionResult GetAll()
    {
        IEnumerable<Todo> todos = context.Todos.OrderByDescending(p=> p.CreationDate).ToList();
        return Ok(todos);
    }

    [HttpGet] //Read
    public IActionResult GetById(int id)
    {
        Todo? todo = context.Todos.Find(id);

        //string work = todo!.Work;

        if(todo is null)
        {
            return BadRequest(new { Message = "Todo kaydı bulunamadı!" });
        }

        return Ok(todo);
    }

    [HttpGet] //Read
    public IActionResult GetByWork(string work)
    {
        IEnumerable<Todo> todos = context.Todos.Where(p => p.Work.ToLower().Contains(work.ToLower())).ToList();        

        return Ok(todos);
    }

    [HttpPost] //Read
    public IActionResult GetByExpression(Expression<Func<Todo, bool>> expression)
    {
        IEnumerable<Todo> todos = context.Todos.Where(expression).ToList();

        return Ok(todos);
    }

    [HttpPost("{id}")] // Update
    public IActionResult Update(int id, UpdateTodoDto request)
    {
        Todo? todo = context.Todos.Find(id);

        if(todo is null)
        {
            return BadRequest(new { Message = "Todo kaydı bulunamadı" });
        }

        todo.Work = request.Work;
        todo.DateToBeCompleted = request.DateToBeCompleted;

        //context.Update(todo); //tracking mekanizması olduğundan buna gerek yok
        context.SaveChanges();

        return Ok(new {Id = todo.Id});
    }

    [HttpGet] // Update
    public IActionResult ChangeCompletedStatus(int id)
    {
        Todo? todo = context.Todos.Find(id);

        if (todo is null)
        {
            return BadRequest(new { Message = "Todo kaydı bulunamadı" });
        }

        todo.IsCompleted = !todo.IsCompleted;
        todo.DateCompleted = todo.IsCompleted == false ? null : DateTime.Now;

        context.SaveChanges();

        return NoContent();
    }

    [HttpGet("{id}")] //Remove
    public IActionResult RemoveById(int id)
    {
        Todo? todo = context.Todos.Find(id);

        if (todo is null)
        {
            return BadRequest(new { Message = "Todo kaydı bulunamadı" });
        }

        context.Remove(todo);
        context.SaveChanges();

        return NoContent();
    }

}

public sealed class TodoDto
{
    public string Work { get; set; } = string.Empty;
    public DateTime DateToBeCompleted { get; set; }
}

public sealed class AddTodoDto
{
    public string Work { get; set; } = string.Empty;
    public DateTime DateToBeCompleted { get; set;}
}

public sealed class UpdateTodoDto
{    
    public string Work { get; set; } = string.Empty;
    public DateTime DateToBeCompleted { get; set; }    
}
