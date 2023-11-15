using NTierArchitecture.WebApi.Models;
using System.Text;

namespace NTierArchitecture.WebApi.Services;

public static class PasswordService
{
    public static void CreatePassword(string password, out byte[] hash, out byte[] salt)
    {
        var hmac = new System.Security.Cryptography.HMACSHA512();
        salt = hmac.Key;
        hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
    }

    public static bool CheckPassword(User user,string password)
    {
        var hmac = new System.Security.Cryptography.HMACSHA512(user.PasswordSalt);
        var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computeHash.Length; i++)
        {
            if (computeHash[i] != user.PasswordHash[i])
            {
                return false;
            }
        }

        return true;
    }
}
