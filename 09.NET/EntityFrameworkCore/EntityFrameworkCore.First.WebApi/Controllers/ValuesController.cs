using EntityFrameworkCore.First.WebApi.Context;
using EntityFrameworkCore.First.WebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkCore.First.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController : ControllerBase
{
    [HttpDelete] //HttpGet
    public IActionResult Delete(string work, DateTime date)
    {
        Todo todo = new()
        {
            Work = work,
            DateToBeCompleted = date,
            CreationDate = DateTime.Now
        };

        ApplicationDbContext context = new();
        context.Add(todo);
        context.SaveChanges();
        return Ok(new { Message = "Silme işlemi başarıyla tamamlandı" });
    }

    [HttpPut] //HttpPost
    public IActionResult Update(AddTodoDto addTodoDto)
    {
        //Todo todo = new()
        //{
        //    Work = work,
        //    DateToBeCompleted = date,
        //    CreationDate = DateTime.Now
        //};

        //ApplicationDbContext context = new();
        //context.Add(todo);
        //context.SaveChanges();
        return Ok(new { Message = "Güncelleme işlemi başarıyla tamamlandı" });
    }
}
