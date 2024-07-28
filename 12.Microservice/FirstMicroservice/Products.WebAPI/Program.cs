using Microsoft.EntityFrameworkCore;
using Products.WebAPI.Context;
using Products.WebAPI.Dtos;
using Products.WebAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/getall", async (ApplicationDbContext context) =>
{
    var products = context.Products.ToList();

    HttpClient httpClient = new();
    List<ProductDto> result = new();
    var message = await httpClient.GetAsync("http://categories-api:8080/getall");
    if (message.IsSuccessStatusCode)
    {
        var content = await message.Content.ReadFromJsonAsync<List<CategoryDto>>();

        result = products.Select(s => new ProductDto(
            s.Id,
            s.Name,
            s.Price,
            s.CategoryId,
            content.First(p => p.Id == s.CategoryId).Name)).ToList();

    }

    return result;
});


app.MapPost("/create", (CreateProductDto request, ApplicationDbContext context) =>
{
    Product product = new()
    {
        Name = request.Name,
        Price = request.Price,
        CategoryId = request.CategoryId,
    };

    context.Products.Add(product);
    context.SaveChanges();

    return product.Id;
});

using (var scope = app.Services.CreateScope())
{
    var srv = scope.ServiceProvider;
    var context = srv.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
}

app.Run();
