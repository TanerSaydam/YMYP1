using EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ValuesController(
    ApplicationDbContext context) : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        //var result = (from categoryProduct in context.CategoryProducts
        //             join category in context.Categories on categoryProduct.CategoryId equals category.Id
        //             select new
        //             {
        //                 CategoryProduct = categoryProduct,
        //                 Category = category,
        //             }).ToList();

        var result = context.Lessons.Include(p=> p.Topics).ToList();

        var newResult = result.Select(s => new
        {
            Name = s.LessonName,
            Field = s.LessonField,
            Type = s.LessonType,
            Topics = s.Topics.Select(n => n.TopicName).ToList()
        });

        return Ok(newResult);
    }
}
