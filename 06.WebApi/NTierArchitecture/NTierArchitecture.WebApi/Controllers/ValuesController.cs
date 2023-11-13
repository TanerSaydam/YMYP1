using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography;
using System.Text;

namespace NTierArchitecture.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController : ControllerBase
{
    private static byte[] Hash;
    private static byte[] Salt;

    [HttpGet]
    public IActionResult Encrypt(string password)
    {
        var hmac = new System.Security.Cryptography.HMACSHA512();
        Salt = hmac.Key;
        Hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));//hashleme


        return Ok(new { Hash = Hash, Salt = Salt });
    }

    [HttpGet]
    public IActionResult Decode(string password)
    {
        var hmac = new System.Security.Cryptography.HMACSHA512(Salt);
        var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computeHash.Length; i++)
        {
            if (computeHash[i] != Hash[i])
            {
                return BadRequest();
            }
        }

        return Ok();
    }
}
