using System.Security.Claims;

namespace Core.Extensions;
public static class ClaimsPrincipalExtensions
{
    public static List<String> Claims(this ClaimsPrincipal claimsPrincipal, string claimType)
    {
        var result = claimsPrincipal?.FindAll(claimType)?.Select(p => p.Value).ToList();
        return result;
    }

    public static List<string> ClaimsRoles(this ClaimsPrincipal claimsPrincipal)
    {
        return claimsPrincipal?.Claims(ClaimTypes.Role);
    }
}
