namespace FlightReservation.MVC.Controllers;

[Authorize]
public class HomeController : Controller
{
    public IActionResult Index()
    {
        var user = User.Claims;
        return View();
    }
}
