using NTierArchitecture.DataAccess.Context;
using NTierArchitecture.Entities.Models;
using System.Linq.Expressions;

namespace NTierArchitecture.DataAccess.Repositories;

public sealed class ClassRoomRepository
    (ApplicationDbContext context) : IClassRoomRepository
{
    public bool Any(Expression<Func<ClassRoom, bool>> predicate)
    {
        return context.ClassRooms.Any(predicate);
    }

    public void Create(ClassRoom student)
    {
        context.Add(student);
        context.SaveChanges();
    }

    public void DeleteById(Guid Id)
    {
        ClassRoom? student = GetClassRoomById(Id);
        if (student is not null)
        {
            student.IsDeleted = true;   

            context.SaveChanges();
        }
    }

    public IQueryable<ClassRoom> GetAll()
    {
        return context.ClassRooms.AsQueryable();
    }

    public ClassRoom? GetClassRoomById(Guid classRoomId)
    {
        return context.ClassRooms.Where(p => p.Id == classRoomId).FirstOrDefault();
    }

    public void Update(ClassRoom student)
    {
        context.Update(student);
        context.SaveChanges();
    }
}
