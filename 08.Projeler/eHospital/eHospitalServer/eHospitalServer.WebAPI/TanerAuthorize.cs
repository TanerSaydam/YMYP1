using Microsoft.AspNetCore.Mvc.Filters;

namespace eHospitalServer.WebAPI;

public class TanerAuthorize : Attribute, IAuthorizationFilter
{
   
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        throw new NotImplementedException();
    }
}
