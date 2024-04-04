using Microsoft.AspNetCore.Mvc;

namespace Newsletter.MVC.Controllers;
public class NewslettersController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
