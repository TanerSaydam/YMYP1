namespace _06.Donguler
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            List<string> names = new();
            names.Add("Taner"); //0
            names.Add("Tugay"); //1
            names.Add("Tahir"); //2
            names.Add("Toprak");
            names.Add("Türkan");
            names.Add("Seval");

            //Console.WriteLine(names[0]);
            //Console.WriteLine(names[1]);
            //Console.WriteLine(names[2]);
            //Console.WriteLine(names[3]);
            //Console.WriteLine(names[4]);
            //Console.WriteLine(names[5]);

            //for, foreach, while

            //for(int x = 0; x < names.Count(); x++)
            //{
            //    Console.WriteLine(names[x]);
            //}

            //foreach(var x in names)
            //{
            //    Console.WriteLine(x);
            //}

            //int x = 0;
            //while(names.Count() > 0)
            //{
            //    //x++;
            //    //if (x == 5) break;
            //    Console.WriteLine("Çalışıyor!");
            //}

            //do //döngü şartı sağlanmasa bile bir defaya mahsus çalış demek için kullanılıyor!
            //{
            //    Console.WriteLine("Çalışıyor!");
            //}while(names.Count < 0);

            for (int x = 0; x < names.Count(); x++)
            {
                if(x == 4)
                {
                    break; //bu döngüyü sonlandırır
                }

                if(x == 2)
                {
                    continue; //bu da döngüde kalan kısmı atlar.
                }
                Console.WriteLine(names[x]);
            }



            //oop içerisinde tip belirtmek zorunda olduğun için liste belirtilen tipte olmak zorunda
            //json formatı kullanıyor olsaydın listede farklı tipler olabilirdi
        }
    }
}