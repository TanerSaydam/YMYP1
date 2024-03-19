using Cache.WebAPI.Context;
using Cache.WebAPI.Models;
using EntityFrameworkCorePagination.Nuget.Pagination;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Caching.Memory;
using StackExchange.Redis;
using System.Text.Json;
using System.Threading;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseInMemoryDatabase("MyDb");
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMemoryCache();

var scoped = builder.Services.BuildServiceProvider();
ApplicationDbContext context = scoped.GetRequiredService<ApplicationDbContext>();
IMemoryCache memoryCache = scoped.GetRequiredService<IMemoryCache>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("SeedData", () =>
{
    var redisConnection = ConnectionMultiplexer.Connect("localhost:6379");
    var redisCahce = redisConnection.GetDatabase();
    redisCahce.KeyDelete("products");
    memoryCache.Remove("products");
    
    List<Product> products = new List<Product>();
    for (int i = 0; i < 100000; i++)
    {
        Product product = new()
        {
            Name = "Product " + i
        };

        products.Add(product);
    }

    context.Products.AddRange(products);
    context.SaveChanges();

    return new { Message = "Product SeedData is successful" };
});


app.MapGet("GetAllProductsCacheRedis", async (CancellationToken cancellationToken) =>
{
    var redisConnection = ConnectionMultiplexer.Connect("localhost:6379");
    var redisCahce = redisConnection.GetDatabase();

    List<Product>? products = null;
    RedisValue redisValue = redisCahce.StringGet("products");
    if (!redisValue.IsNullOrEmpty)
    {
        products = JsonSerializer.Deserialize<List<Product>>(redisValue);
    }

    if (products is null)
    {
        products = await context.Products.ToListAsync(cancellationToken);

        redisCahce.StringSet("products", JsonSerializer.Serialize(products), TimeSpan.FromMinutes(20));
    }

    return products.Count();
});

app.MapGet("GetAllProductsCacheMemory", async (CancellationToken cancellationToken) =>
{
    memoryCache.TryGetValue("products", out List<Product>? products);

    if(products is null)
    {
        products = await context.Products.ToListAsync(cancellationToken);

        memoryCache.Set("products", products, new MemoryCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30)
        });
    }
    
    return products.Count();
});

app.MapGet("GetAllProductsWithPagination", async(int pageNumber = 1, int pageSize = 10, CancellationToken cancellationToken = default) =>
{
    //List<Product> products = await context.Products.Skip(pageSize * pageNumber).Take(pageSize).ToListAsync(cancellationToken);
    //decimal count = await context.Products.CountAsync(cancellationToken);
    //decimal totalPageNumbers = Math.Ceiling(count / pageSize);
    //bool isFirstPage = pageNumber == 1 ? true : false;
    //bool isLastPage = pageNumber == totalPageNumbers ? true : false;


    //var response = new
    //{
    //    Data = products,
    //    Count = count,
    //    TotalPageNumbers = totalPageNumbers,
    //    IsFirstPage = isFirstPage,
    //    IsLastPage = isLastPage,
    //    PageNumber = pageNumber,
    //    PageSize = pageSize
    //};

    PaginationResult<Product> pageProducts = await context.Products.ToPagedListAsync(pageNumber, pageSize, cancellationToken);

    return pageProducts;
});

app.Run();

