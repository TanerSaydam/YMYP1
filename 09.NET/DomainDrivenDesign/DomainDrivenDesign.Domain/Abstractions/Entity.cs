namespace DomainDrivenDesign.Domain.Abstractions;

public abstract class Entity
{
    public Guid Id { get; set; }
    protected Entity()
    {
        Id = Guid.NewGuid();
    }

    public override bool Equals(object? obj)
    {
        if (obj is null) return false;

        if(obj is not Entity entity) return false;

        if(obj.GetType() != typeof(Entity)) return false;

        return entity.Id == Id;
    }

    public override int GetHashCode()
    {
        return Id.GetHashCode();
    }


}

//public class Test: Entity
//{
    
//}


//public class Test2
//{
//    public Test2()
//    {
//        Guid id = Guid.NewGuid();
//        Test test1 = new() { Id = id };
//        Test test2 = new() { Id = id };

//        test1.Equals(test2);
//    }
//}
