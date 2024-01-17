using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;
using EntityFrameworkCore.RepositoryPattern.WebApi.Context;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public class Repository<T> : IRepository<T>
    where T: Entity
{
    public readonly ApplicationDbContext context;

    public Repository(ApplicationDbContext context)
    {
        this.context = context;
    }

    public int Add(T entity)
    {
        context.Set<T>().Add(entity);
        context.SaveChanges();
        return entity.Id;
    }

    public void Update(T entity)
    {
        context.Set<T>().Update(entity);
        context.SaveChanges();
    }

    public void DeleteById(int id)
    {
        T? entity = context.Set<T>().Find(id);
        if(entity is not null)
        {
            context.Remove(entity);
            context.SaveChanges();
        }
    }

    public List<T> GetAll()
    {
        return context.Set<T>().ToList();
    }
}
