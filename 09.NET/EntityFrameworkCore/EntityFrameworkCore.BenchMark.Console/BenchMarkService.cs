using BenchmarkDotNet.Attributes;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.BenchMark.Console;
public class BenchMarkService
{
    ApplicationDbContext context = new();

    //[Benchmark(Baseline = true)]
    //public async Task ToListAsync()
    //{
    //    await context.ShoppingCarts.ToListAsync();
    //}

    //[Benchmark]
    //public void ToList()
    //{
    //    context.ShoppingCarts.ToList();
    //}

    [Benchmark(Baseline = true)]
    public async Task ToListAsyncWithAsNoTracking()
    {
        await context.ShoppingCarts.AsNoTracking().ToListAsync();
    }

    [Benchmark]
    public async Task ToListAsync()
    {
        await context.ShoppingCarts.ToListAsync();
    }
}
