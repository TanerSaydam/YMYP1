namespace My_First_Console_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            //OOP => Object Oriented Programming
            //Java,PHP, C# ,VB,TypeScript
            //Class
            //string,int,boolean,date,object => primitive tip => ilket tip
            //string nameLastname = "taner@saydam.com"; //Değişken oluşturma
            //string email = "Taner Saydam"; //Değişken oluşturma
            //state
            //İsimlendirme Kuralları
            //values

            //ram //bellek // memory => ram parçası

            //garbage collector bunu araştırın ve paylaşın

            string name = "Taner"; //açıklama satırı
            //açıklama satırı
            double pi = 2.14;
            int age = 33;
            decimal money = 100.10m;
            double money2 = 100.10;
            decimal money3 = money;
            DateTime now = DateTime.Now;
            bool isTrue = true; // 0 => yanlış => false - 1 => doğru => true
            object user = new { };

            Console.WriteLine("Taner Saydam");
            Console.WriteLine(name);
            Console.WriteLine(age);
            Console.WriteLine(money); //ctrl+d kodu aşağıya kopyalar
            Console.WriteLine(money2);
            Console.WriteLine(money3);
            Console.WriteLine(now);
            Console.WriteLine(isTrue);           

            //memory'de tutulma


        }
    }
}