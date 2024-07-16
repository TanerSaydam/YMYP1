using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using Core.Utilities.IoC;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics;

namespace Core.Aspects.Performance;
public class PerformanceAspect : MethodInterception
{
    private int _interval;
    private Stopwatch _stopwatch;

    public PerformanceAspect()
    {
        _interval = 3;
        _stopwatch = ServiceTool.ServiceProvider.GetService<Stopwatch>();
    }
    public PerformanceAspect(int interval)
    {
        _interval = interval;
        _stopwatch = ServiceTool.ServiceProvider.GetService<Stopwatch>();
    }

    protected override void OnBefore(IInvocation invocation)
    {
        _stopwatch.Start();
    }

    protected override void OnAfter(IInvocation invocation)
    {
        double second = _stopwatch.Elapsed.TotalSeconds;
        if (second > _interval)
        {
            //Mail Kodları
            //Database kodları               
            Debug.WriteLine($"Perfomans Raporu: {invocation.Method.DeclaringType.FullName}.{invocation.Method.Name} ==> {second}");
        }
        _stopwatch.Reset();
    }
}
