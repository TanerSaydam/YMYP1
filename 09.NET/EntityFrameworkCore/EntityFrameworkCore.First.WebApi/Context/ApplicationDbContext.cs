using EntityFrameworkCore.First.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.First.WebApi.Context;

public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Data Source=TANER\SQLEXPRESS;Initial Catalog=FirstTodoDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");
        optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);
        //optionsBuilder.UseNpgsql("");
        //optionsBuilder.UseSqlite("");
    } 
    
    public DbSet<Todo> Todos { get; set; }
}


//public class A
//{
//    private int Age { get; set; }
//    public int Id { get; set; }
//    public void Method() { }
//}

//public interface IInterface
//{
//    string Name { get; set; }
//    void Method2();
//}

//public class B : A //inherit
//{

//}

//public class C : IInterface //implement
//{
//    public string Name { get; set; }

//    public void Method2()
//    {
        
//    }
//}

//public class D : A, IInterface //inherit + implement
//{
//    public string Name { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

//    public void Method2()
//    {
//        throw new NotImplementedException();
//    }
//}
