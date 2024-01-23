using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;
using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public class Repository<T> : IRepository<T>
    where T: Entity
{
    public readonly ApplicationDbContext _context;
    private DbSet<T> Entity;
    public Repository(ApplicationDbContext context)
    {
        _context = context;
        Entity = context.Set<T>();
    }

    public async Task<int> AddAsync(T entity) //1000
    {
        await Entity.AddAsync(entity);
        return entity.Id;
    }

    public int Add(T entity) //100
    {
        Entity.Add(entity);
        return entity.Id;
    }

    public void Update(T entity)
    {
        Entity.Update(entity);
        //_context.SaveChanges();
    }

    public void DeleteById(int id)
    {
        T? entity = Entity.Find(id);
        if(entity is not null)
        {
            _context.Remove(entity);
            //_context.SaveChanges();
        }
    }

    public List<T> GetAll()
    {
        return Entity.ToList();
    }

   
}
