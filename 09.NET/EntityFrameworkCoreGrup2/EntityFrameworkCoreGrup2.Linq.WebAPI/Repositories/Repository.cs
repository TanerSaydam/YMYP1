using EntityFrameworkCoreGrup2.Linq.WebAPI.Context;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Repositories;

public class Repository<T>(
    ApplicationDbContext context) : IRepository<T>
    where T : class
{
    public void Create(T entity)
    {
        context.Set<T>().Add(entity);
       // context.SaveChanges();
    }

    public List<T> GetAll()
    {
        return context.Set<T>().ToList();
    }

    public void Update(T entity)
    {
        context.Update(entity);       
    }
}
    
