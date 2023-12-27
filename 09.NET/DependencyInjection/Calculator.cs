namespace DependencyInjection;

public class Calculator
{
    public int Total {  get; set; }
    public Calculator()
    {
        
    }
    public int Add(int firstNumber, int secondNumber)
    {        
        Total += firstNumber + secondNumber;
        return Total;
    }

    public int Subtract(int firstNumber, int secondNumber)
    {
        return firstNumber - secondNumber;
    }
}


//Erişim belirleyiciler | Access Modifier
//public => herkes tarafından kullanılabilmesini sağlar
//private => Sadece kendi içerisinde kullanılabilmesini sağlar
//internal => sadece aynı katmanda kullanılabilmesini sağlar | Bu kısmı detaylı  açıklayacağım
//protected => sadece interit edenlerin kullanabilmesini sağlar