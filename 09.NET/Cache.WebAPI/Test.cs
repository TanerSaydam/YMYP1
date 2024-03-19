namespace Cache.WebAPI;

public class Test
{
    public void Test1()
    {        
        Test2(out int x);

        x += 1;
    }
    //out ve ref
    public void Test2(out int x)
    {
        x = 0;
        int y = 5;
        x += y;
    }
}
