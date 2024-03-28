using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Log.WebAPI.Services;

public class JwtProvider 
{
    public string CreateToken()
    {

        List<Claim> claims = new()
        {
            new Claim(ClaimTypes.NameIdentifier,"CaglaTuncSavas")
        };

        DateTime expires = DateTime.Now.AddDays(1);

        JwtSecurityToken jwtSecurutyToken = new(
            issuer: "Çağla",
            audience: "Taner",
            claims: claims,
            expires: expires,
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("My secret key My secret key My secret key My secret key My secret key ")), SecurityAlgorithms.HmacSha512));

        JwtSecurityTokenHandler handler = new();

       string token = handler.WriteToken(jwtSecurutyToken);

        return token;
    }
}
