using DependencyInjection;
using DependencyInjection.Controllers;
using DependencyInjection.Repostories;

var builder = WebApplication.CreateBuilder(args);

// Dependency Injection
builder.Services.AddTransient<A>();
builder.Services.AddScoped<Calculator>();
builder.Services.AddScoped<IProductRepository, ProductRepositoryNew>(); 
        //Bağımlılıkları Azaltma | Somut Bağımlılığı Soyut Bağımlılığa Çevirme

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
