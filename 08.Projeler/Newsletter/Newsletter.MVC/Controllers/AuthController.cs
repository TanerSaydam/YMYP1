using MediatR;
using Microsoft.AspNetCore.Mvc;
using Newsletter.Application.Features.Auth.Login;

namespace Newsletter.MVC.Controllers;
public class AuthController(
    IMediator mediator
) : Controller
{
    public IActionResult Login()
    {
        return View();
    }   

    [HttpPost]
    public async Task<IActionResult> Login(LoginCommand request, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(request, cancellationToken);

        TempData["UserNameOrEmail"] = request.UserNameOrEmail;
        TempData["Password"] = request.Password;

        if(!response.IsSuccessful)
        {
            TempData["Error"] = response.ErrorMessages!.First();
            return RedirectToAction("Login");
        }


        return RedirectToAction("Index", "Home");
    }
}
