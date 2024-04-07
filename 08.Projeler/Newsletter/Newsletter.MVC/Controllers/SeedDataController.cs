using Bogus;
using GenericRepository;
using Microsoft.AspNetCore.Mvc;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;

namespace Newsletter.MVC.Controllers;
[Route("api/[controller]")]
[ApiController]
public sealed class SeedDataController(
    ISubscribeRepository subscribeRepository,
    IBlogRepository blogRepository,
    IUnitOfWork unitOfWork) : ControllerBase
{    
    public async Task<IActionResult> Seed(CancellationToken cancellationToken)
    {
        List<Blog> blogs = new();
        for (int i = 0; i < 5; i++)
        {
            Faker faker = new();
            Random random = new();

            Blog blog = new()
            {
                Title = faker.Lorem.Letter(random.Next(5, 8)),
                Summary = faker.Lorem.Letter(random.Next(15, 55)),
                Content = faker.Lorem.Lines(random.Next(3, 7), "<br><br>"),
                IsPublish = (i % 2 == 0),
                PublishDate = (i % 2 == 0 ? DateOnly.FromDateTime(DateTime.Now) : null)
            };

            blogs.Add(blog);
        }

        await blogRepository.AddRangeAsync(blogs, cancellationToken);

        List<Subscribe> subscribes = new();

        for (int i = 0; i < 1000; i++)
        {
            Faker faker = new();

            Subscribe subscribe = new()
            {
                Email = faker.Person.Email,
                EmailConfirmed = true
            };

            subscribes.Add(subscribe);
        }

        await subscribeRepository.AddRangeAsync(subscribes, cancellationToken);

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return NoContent();
    }
}
