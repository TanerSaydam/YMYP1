using Bogus;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PatternContexts;
using NTierArchitecture.DataAccess.Context;
using NTierArchitecture.DataAccess.Repositories;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class SeedDataController(
    ApplicationDbContext context,
    IStudentRepository studentRepository) : ControllerBase
{
    [HttpGet]
    public IActionResult CreateRandomStudents()
    {
        var classRooms = context.ClassRooms.ToList();
        var random = new Random();

        for (int i = 0; i < 1000; i++)
        {
            Faker faker = new();

            int studentNumber = studentRepository.GetNewStudentNumber();
            string identityNumber = Math.Ceiling(faker.Person.Random.Decimal(11111111111, 999999999998)).ToString();

            while(context.Students.Any(p=> p.IdentityNumber == identityNumber))
            {
                identityNumber = Math.Ceiling(faker.Person.Random.Decimal(11111111111, 999999999998)).ToString();
            }


            Student student = new()
            {
                ClassRoomId = classRooms[random.Next(0, classRooms.Count)].Id,
                FirstName = faker.Person.FirstName,
                LastName = faker.Person.LastName,
                IdentityNumber = identityNumber,
                StudentNumber = studentNumber,
                CreatedDate = DateTime.Now,
                CreatedBy = "Admin",
                IsDeleted = false
            };

            context.Add(student);
            context.SaveChanges();
        }

        return NoContent();
    }
}
