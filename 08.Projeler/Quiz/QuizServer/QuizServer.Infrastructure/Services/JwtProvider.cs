using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using QuizServer.Application.Services;
using QuizServer.Domain.Users;
using QuizServer.Infrastructure.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace QuizServer.Infrastructure.Services;
internal sealed class JwtProvider(
    IOptions<Jwt> options) : IJwtProvider
{
    public string CreateToken(User user)
    {
        SymmetricSecurityKey securityKey = new(Encoding.UTF8.GetBytes(options.Value.SecretKey));
        SigningCredentials signingCredentials = new(securityKey, SecurityAlgorithms.HmacSha512);

        List<Claim> claims = new()
        {
            new Claim("userName", user.UserName.Value)
        };

        DateTime expires = DateTime.Now.AddMonths(1);

        JwtSecurityToken jwtSecurityToken = new(
            issuer: options.Value.Issuer,
            audience: options.Value.Audience,
            claims: claims,
            notBefore: DateTime.Now,
            expires: expires,
            signingCredentials: signingCredentials);

        JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
        string token = handler.WriteToken(jwtSecurityToken);

        return token;
    }
}
