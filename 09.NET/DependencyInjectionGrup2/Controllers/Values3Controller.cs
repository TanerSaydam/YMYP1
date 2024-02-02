using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DependencyInjectionGrup2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Values3Controller : ControllerBase
    {
        [HttpGet("Create")]
        public IActionResult Create(string firstName, string lastName)
        {
            User user = new()
            {
                Id = Guid.NewGuid(),
                FirstName = firstName,
                LastName = lastName
            };

            string path = "wwwroot/users.json";

            List<User> users = new List<User>();
            if (System.IO.File.Exists(path))
            {
                // Dosya varsa, mevcut kullanıcıları oku
                string allText = System.IO.File.ReadAllText(path);
                users = JsonConvert.DeserializeObject<List<User>>(allText) ?? new List<User>();
            }

            users.Add(user);

            // Tüm kullanıcı listesini JSON olarak kaydet
            string jsonText = JsonConvert.SerializeObject(users, Formatting.Indented);
            System.IO.File.WriteAllText(path, jsonText);

            return NoContent();
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            string path = "wwwroot/users.json";
            string allText = System.IO.File.ReadAllText(path);
            var users = JsonConvert.DeserializeObject<List<User>>(allText) ?? new List<User>();
           
            return Ok(users);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(Guid id)
        {
            string path = "wwwroot/users.json";

            if (System.IO.File.Exists(path))
            {
                // Dosyadan mevcut kullanıcı listesini oku
                string allText = System.IO.File.ReadAllText(path);
                List<User> users = JsonConvert.DeserializeObject<List<User>>(allText) ?? new List<User>();

                // Silinecek kullanıcıyı bul ve listeden çıkar
                User userToRemove = users.FirstOrDefault(u => u.Id == id);
                if (userToRemove != null)
                {
                    users.Remove(userToRemove);

                    // Güncellenmiş kullanıcı listesini JSON olarak kaydet
                    string jsonText = JsonConvert.SerializeObject(users, Formatting.Indented);
                    System.IO.File.WriteAllText(path, jsonText);

                    return Ok($"User with ID {id} has been deleted.");
                }
                else
                {
                    return NotFound($"User with ID {id} not found.");
                }
            }
            else
            {
                return NotFound("User file not found.");
            }
        }
    }

    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
    }
}
