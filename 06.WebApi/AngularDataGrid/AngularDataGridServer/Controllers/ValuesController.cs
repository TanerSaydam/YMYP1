using Bogus;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace AngularDataGridServer.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController(ApplicationDbContext context) : ControllerBase
{
    private static List<Book> Books = new List<Book>();

    [HttpGet]
    public IActionResult SeedData()
    {
        for (int i = 0; i < 1000000; i++)
        {
            Faker faker = new();
            Book book = new()
            {
                Name = string.Join(" ", faker.Lorem.Words(3)),
                Author = faker.Name.FullName(),
                PublishDate = faker.Date.BetweenDateOnly(DateOnly.Parse("01.01.1900"), DateOnly.Parse("01.01.2024")),
                Summary = faker.Lorem.Lines(10)
            };

            //Books.Add(book);
            context.Add(book);
            context.SaveChanges();
        }

        return NoContent();
    }

    [HttpGet]
    [EnableQuery]
    public IActionResult GetAll()
    {
        var books = context.Books.AsQueryable();
        
        return Ok(books);
    }

    [HttpPost]
    public IActionResult Update(Book book)
    {
        context.Update(book);
        context.SaveChanges();
        return NoContent();
    }
}

public sealed class ApplicationDbContext : DbContext
{    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Data Source=DESKTOP-3BJ5GK9\\SQLEXPRESS;Initial Catalog=AngularDataGridDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
        optionsBuilder.LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information);
    }

    public DbSet<Book> Books { get; set; }
}

public sealed record PaginationResponse<T>
    where T: class
{
    public T? Data { get; init; }
    public int TotalCount { get; init; }
}

public sealed class Book
{
    public Book()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public DateOnly PublishDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);
}
