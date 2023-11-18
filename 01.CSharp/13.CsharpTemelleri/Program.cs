namespace _13.CsharpTemelleri;

internal class Program
{    
    static void Main(string[] args)
    {
        Test test1 = new();
        test1.Name = "Taner";

        Test test2 = new("Ahmet");
        test2.Name = "Ahmet";



        string naem1 = "Taner";
        string name2 = "Ahmet";

        Console.WriteLine("Hello, World!");
    }
}


public class Test
{
    public Test(string isim)
    {
        Name = isim;
    }
    public Test()
    {
        Name = "Taner";
    }

    public Test(int age)
    {
        Age = age;
    }
    public string Name { get; set; } //Değişken => Property,,  Charmander => Charmeleon
    public int Age { get; set; }
}