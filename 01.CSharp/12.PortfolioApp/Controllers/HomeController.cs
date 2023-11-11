using _12.PortfolioApp.Context;
using _12.PortfolioApp.Dtos;
using _12.PortfolioApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace _12.PortfolioApp.Controllers;

public class HomeController : Controller
{
    AppDbContext context = new();
    public IActionResult Index()
    {
        User user = context.Set<User>().FirstOrDefault();
        List<Ability> abilities = context.Set<Ability>().ToList();
        List<Experience> experiences = context.Set<Experience>().ToList();
        List<SocialMedia> socialMedias = context.Set<SocialMedia>().ToList();

        HomeDto homeDto = new()
        {
            User = user,
            Abilities = abilities,
            Experiences = experiences,
            SocialMedias = socialMedias
        };        

        return View(homeDto);
    }

    public IActionResult About()
    {
        User user = context.Set<User>().FirstOrDefault();
        return View(user);
    }

    public IActionResult Blogs()
    {
        IList<Blog> blogs = context.Set<Blog>().ToList();
        return View(blogs);
    }

    public IActionResult BlogDetail(int id)
    {
        Blog blog = context.Set<Blog>().Find(id);
        return View(blog);
    }
}