namespace _10.Metotlar
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Kodun okunabilir olmasıdır
            //Kodun az olması
            int x = 0;
            int y = 2;

            //Metot(x,y);
            int r = Metot(x,y,2);
            Console.WriteLine($"Sonuc: {r}");
        }
        
        static void Metot()//geriye değer dönmeyen metot
        {
            var sonuc = 5+3;
            Console.WriteLine($"Sonuç: {sonuc}");
        }

        static int Metot(int a, int b)//geriye değer dönen metot
        {
            int sonuc = a + b;
            return sonuc;
        }

        static int Metot(int a, int b, int c)//geriye değer dönen metot
        {
            int sonuc = a * b + c;
            return sonuc;
        }
    }
}