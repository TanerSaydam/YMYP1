using System.Runtime.CompilerServices;

//RedisCache memoryCache = new();
//memoryCache.CreateCache();


//abstract class Cache
//{
//    public virtual void CreateCache()
//    {

//    }
//}


//class MemoryCache: Cache
//{
//    public override void CreateCache()
//    {
//        Console.WriteLine("Memory Cache yap");
//    }
//}


//class RedisCache : Cache
//{
//    public override void CreateCache()
//    {
//        Console.WriteLine("Redis Cache yap");
//    }
//}




















User user1 = new()
{
    Id = 1,
    FirstName = "Taner",
    LastName = "Saydam",
    Email = "tanersaydam@gmail.com"
};

User user2 = new()
{
    Id = 1,
    FirstName = "Taner",
    LastName = "Saydam",
    Email = "tanersaydam@gmail.com"
};

//var result = user1.Equals(user2);
string name1 = "Taner";
string name2 = "Toprak";
var result2 = name1 == name2;

var result = user1 == user2;

Console.WriteLine($"user1 user2'ye eşit mi?: {result}");

Console.ReadLine();

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    public override bool Equals(object? obj)
    {
        if (obj is null) return false;

        if (obj is not User user) return false;

        if (obj.GetType() != typeof(User)) return false;

        return user.Id == Id;
    }

    public static bool operator ==(User left, User right)
    {
        if (left is null || right is null ) return false;        

        if (left.GetType() != right.GetType()) return false;

        return left.Id == right.Id;
    }

    public static bool operator !=(User left, User right)
    {
        if (left is null || right is null) return true;
        if (left.GetType() != right.GetType()) return true;
        return left.Id == right.Id;
    }    
}