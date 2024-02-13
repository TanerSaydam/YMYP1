using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace NTierArchitecture.Business.Services;
public sealed class JwtProvider : IJwtProvider
{
    public string CreateToken()
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("benim şire anahtarım benim şire anahtarım benim şire anahtarım benim şire anahtarım benim şire anahtarım"));
        
        JwtSecurityToken jwtSecurityToken = new(
            issuer: "Taner Saydam",
            audience: "www.tanersaydam.com",
            claims: null,
            notBefore: DateTime.Now,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512));

        JwtSecurityTokenHandler handler = new();
        string token = handler.WriteToken(jwtSecurityToken);
        return token;
    }
}
