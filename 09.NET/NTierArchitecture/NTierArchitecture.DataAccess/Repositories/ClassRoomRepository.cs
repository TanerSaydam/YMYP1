using NTierArchitecture.DataAccess.Context;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.DataAccess.Repositories;

public sealed class ClassRoomRepository
    (ApplicationDbContext context) : IClassRoomRepository
{
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
            context.Remove(student);
            context.SaveChanges();
        }
    }

    public List<ClassRoom> GetAll()
    {
        return context.ClassRooms.ToList();
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
