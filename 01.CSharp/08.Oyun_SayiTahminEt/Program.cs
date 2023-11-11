Console.WriteLine("Lütfen isminizi girin:");
string name = Console.ReadLine();
Console.WriteLine("Sayı tahmini oyuna hoş geldiniz " + name);
Random rastgele = new();

int sayi = rastgele.Next(1, 10);
int tahmin = 0;
int deneme = 1;

//for, foreach, while => break bu döngüyü kırıp çıkmanızı sağlar.
while (sayi != tahmin)
{
    Console.WriteLine("Lütfen 1-10 arasında bir rakam yazın:");
    string tahminEdilenSayi = Console.ReadLine();

    if (!int.TryParse(tahminEdilenSayi, out tahmin))
    {
        Console.WriteLine("Sadece rakam girilebilir!");
        continue;
    }

    if (tahmin > 10)
    {
        Console.WriteLine("Sadece 1-10 arası rakam yazabilirsiniz");
        continue;
    }

    Console.WriteLine("Tahmininiz: " + tahminEdilenSayi);

    if (sayi == tahmin)
    {
        //Console.WriteLine("Tebrikler! Tuttuğum sayıyı " + deneme + " denemede buldunuz!");
        Console.WriteLine($"Tebrikler! Tuttuğum sayıyı {deneme}. denemede buldunuz!");
        tahmin = sayi;
        continue;
    }


    Console.WriteLine("Tuttuğum sayıyı bilemediniz!!!");
    deneme++;
}