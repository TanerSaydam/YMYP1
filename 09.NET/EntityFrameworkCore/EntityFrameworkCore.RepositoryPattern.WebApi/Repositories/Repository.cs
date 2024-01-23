using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;
using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public class Repository<T> : IRepository<T>
    where T: Entity, new()
{
    public readonly ApplicationDbContext _context;
    private DbSet<T> Entity;
    public Repository(ApplicationDbContext context)
    {
        _context = context;
        Entity = context.Set<T>();
    }

    public async Task<int> AddAsync(T entity, CancellationToken cancellationToken = default) //1000
    {
        await Entity.AddAsync(entity, cancellationToken);
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
        //T? entity = Entity.Find(id);
        T entity = new()
        {
            Id = id
        };
        if(entity is not null)
        {
            _context.Remove(entity);
            //_context.SaveChanges();
        }
    }

    public async Task<List<T>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await Entity.AsNoTracking().ToListAsync(cancellationToken);
    }

    public async Task<T?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await Entity.AsNoTracking().SingleOrDefaultAsync(p=> p.Id == id,cancellationToken);
    }

    public IQueryable<T> GetAllReturnIQueryable()
    {
        return Entity.AsQueryable();
    }
}
