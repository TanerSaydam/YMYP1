using Bogus;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using ODataExample.Server.WebAPI.Context;
using ODataExample.Server.WebAPI.Models;

namespace ODataExample.Server.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class PersonelsController : ControllerBase
{
    [HttpGet]
    [EnableQuery]
    public IActionResult GetAll()
    {
        ApplicationDbContext context = new();
        var personels = context.Personels.AsQueryable();

        return Ok(personels);
    }

    [HttpGet]
    public async Task<IActionResult> SeedData()
    {
        List<Personel> personels = new();

        for (int i = 0; i < 1000; i++)
        {
            Faker faker = new();
            Personel personel = new()
            {
                FirstName = faker.Person.FirstName,
                LastName = faker.Person.LastName,
                DateOfBirth = DateOnly.FromDateTime(faker.Person.DateOfBirth)
            };

            personels.Add(personel);
        }

        ApplicationDbContext context = new();
        await context.AddRangeAsync(personels);
        await context.SaveChangesAsync();

        return Created();
    }
}
