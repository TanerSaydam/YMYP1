using System.Linq.Expressions;

namespace Core.DataAccess;
public interface IEntityRepository<T>
{
    Task Add(T entity);
    Task Update(T entity);
    Task Delete(T entity);
    Task<List<T>> GetAll(Expression<Func<T, bool>> filter = null);
    Task<T> Get(Expression<Func<T, bool>> filter);
    Task<T> GetFirst();
}
