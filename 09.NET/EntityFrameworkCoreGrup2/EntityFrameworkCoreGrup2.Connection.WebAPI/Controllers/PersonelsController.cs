using EntityFrameworkCoreGrup2.Connection.WebAPI.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.Connection.WebAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class PersonelsController : ControllerBase
{
    [HttpPost]
    public IActionResult Create(string name)
    {
        //ApplicationDbContext context = new();
        //Personel personel = new()
        //{
        //    Name = name
        //};

        //context.Add(personel);
        //context.SaveChanges();

        SqlConnection connection = new("Data Source=TANER\\SQLEXPRESS;Initial Catalog=TestDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");
        connection.Open();


        SqlCommand kmt = new("insert into Personels(Name) Values(@p1)",connection);
        kmt.Parameters.AddWithValue("@p1", name);
        kmt.ExecuteNonQuery();



        return NoContent();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        //ApplicationDbContext context = new();
        //var personels = context.Personels.ToList();

        SqlConnection connection = new("Data Source=TANER\\SQLEXPRESS;Initial Catalog=TestDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");
        connection.Open();

        SqlCommand kmt = new("Select * from Personels", connection);
        SqlDataReader reader = kmt.ExecuteReader();
        List<Personel> personels = new();

        while (reader.Read())
        {
            var personel = new Personel
            {
                // Burada, veritabanı sütunlarınıza uygun şekilde Personel nesnesini doldurmanız gerekiyor.
                // Örnek:
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                Name = reader.GetString(reader.GetOrdinal("Name")),
                // Diğer alanlarınız buraya eklenebilir.
            };
            personels.Add(personel);
        }

        return Ok(personels);
    }
}
