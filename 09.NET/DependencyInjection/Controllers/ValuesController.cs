using Microsoft.AspNetCore.Mvc;

namespace DependencyInjection.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController : ControllerBase
{
    //new keywordü bir classı bir objeye dönüştürür. Bu Dönüştürme işlemine instance türetme denir.
    private readonly Calculator _calculator;
    private readonly A _a;
    public ValuesController(Calculator calculator, A a) //inject yapamaya çalıştın
    {
        _calculator = calculator;
        _a = a;
    }

    [HttpGet]
    public IActionResult Add(int firstNumber, int secondNumber)
    {        
        int result = _calculator.Add(firstNumber, secondNumber);
       
        int result2 = _a.Metot();

        return Ok(result2);
    }

    [HttpGet]
    public IActionResult Subtract(int firstNumber, int secondNumber)
    {     
        int result = _calculator.Subtract(firstNumber, secondNumber);
        return Ok(result);
    }
}

public class A
{
    private readonly Calculator _calculator;
    public A(Calculator calculator)
    {
        _calculator= calculator;    
    }
    public int Metot()
    {
        
        var result = _calculator.Add(5, 10);
        return result;
    }
}
