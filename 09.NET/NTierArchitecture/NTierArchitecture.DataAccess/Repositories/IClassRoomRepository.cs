using NTierArchitecture.Entities.Models;
using System.Linq.Expressions;

namespace NTierArchitecture.DataAccess.Repositories;

public interface IClassRoomRepository
{
    void Create(ClassRoom student);
    void Update(ClassRoom student);
    void DeleteById(Guid Id);
    IQueryable<ClassRoom> GetAll();
    ClassRoom? GetClassRoomById(Guid studentId);
    bool Any(Expression<Func<ClassRoom, bool>> predicate);
}
