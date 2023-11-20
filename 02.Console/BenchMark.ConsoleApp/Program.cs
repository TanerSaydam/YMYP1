using BenchmarkDotNet.Running;
using Bogus;

namespace BenchMark.ConsoleApp;

internal class Program
{
    static void Main(string[] args)
    {        
        BenchmarkRunner.Run<BenchMarkService>();
        Console.ReadLine();
    }
}