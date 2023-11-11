namespace DegerTiplerVeReferansTipler
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            string name = "Taner";
            string name2 = name;
            name2 = "Ahmet";

            Console.WriteLine(name);
            Console.WriteLine(name2); //değer tip örneği

            User user = new();
            User user2 = user;
            user2.Name = "Ahmet";

            Console.WriteLine(user.Name);
        }
    }
}


class User
{
   public string Name = "Taner";
}




