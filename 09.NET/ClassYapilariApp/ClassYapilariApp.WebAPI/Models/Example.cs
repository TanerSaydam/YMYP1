namespace ClassYapilariApp.WebAPI.Models;

public class Example //public protected internal private
{
    public Example()
    {
        
    }

    public Example(int id)
    {
        Id = id;
    }
    //property oluşturabiliyorum
    protected int Id { get; set; }

    //değişken oluşturabiliyorum
    //private int privateDeğişken;
    protected int protectedDeğişken;

    //internal int internalDeğişken;
    public int publicDeğişken;

    //Method oluşturabiliyoruz
    public void Method()
    {

    }

    public void Method(int id)
    {

    }

}

public class Tüketici
{
    Example example = new();
    public Tüketici()
    {
        
    }
}
