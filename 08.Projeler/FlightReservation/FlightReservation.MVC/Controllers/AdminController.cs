using FlightReservation.MVC.Repositories;
using System.Security.Claims;

namespace FlightReservation.MVC.Controllers;

[Authorize]
public class AdminController(UserRepository userRepository) : Controller
{
    public IActionResult Index()
    {
        string userId = User.Claims.FirstOrDefault(p => p.Type == ClaimTypes.NameIdentifier)!.Value;
        List<string> userRoles = userRepository.GetUserRoleByUserId(Guid.Parse(userId));
        if (!userRoles.Contains("Admin"))
        {
            return RedirectToAction("Index", "Home");
        }
        return View();
    }
}
