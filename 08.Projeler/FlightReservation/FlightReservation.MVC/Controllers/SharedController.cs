using Microsoft.AspNetCore.Localization;

namespace FlightReservation.MVC.Controllers;
public class SharedController : Controller
{
    public IActionResult ChangeLanguage(string culture)
    {
        Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName, CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)), new CookieOptions()
        {
            Expires = DateTimeOffset.UtcNow.AddYears(1)
        });

        return Redirect(Request.Headers["Referer"].ToString());
    }
}
