using Bogus;
using EntityFrameworkCore.Transaction.WebApi.Context;
using EntityFrameworkCore.Transaction.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.Transaction.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public sealed class ValuesController
    (ApplicationDbContext context): ControllerBase
{
    [HttpGet("SeedData")]
    public IActionResult SeedData()
    {
       // List<Product> products = new List<Product>();
        List<ShoppingCart> carts = new();

        //for (int i = 0; i < 10; i++)
        //{
        //    Faker faker = new();
        //    Product product = new()
        //    {
        //        Name = faker.Commerce.ProductName(),
        //        Price = 100,
        //        Quantity = 10
        //    };

        //    products.Add(product);  
        //}

        //context.AddRange(products);

        for (int i = 1; i <= 5; i++)
        {
            ShoppingCart cart = new()
            {
                ProductId = i,
                Quantity = (short)i
            };
            carts.Add(cart);
        }

        context.AddRange(carts);

        context.SaveChanges();
        

        return NoContent();
    }

    [HttpGet("CreateOrder")]
    public IActionResult CreateOrder()
    {
        List<ShoppingCart> carts = context.ShoppingCarts.Include(p=> p.Product).ToList();

        foreach (var cart in carts)
        {
            try
            {
                //context.Database.BeginTransaction();

                    Order order = new()
                    {
                        Price = cart.Product!.Price,
                        Quantity = cart.Quantity,
                        ProductId = cart.ProductId
                    };
                    context.Add(order);
                    context.SaveChanges();

                    Product? product = context.Products.Find(cart.ProductId);
                    if (product is not null)
                    {
                        product.Quantity -= cart.Quantity;
                        context.Update(product);
                        context.SaveChanges();
                    }

                    throw new Exception();
                    context.Remove(cart);
                    context.SaveChanges();
               // context.Database.CommitTransaction();
            }
            catch (Exception ex)
            {
                //context.Database.RollbackTransaction();


                return BadRequest(ex.Message);
            }
           
        }

        return NoContent();
    }
}
