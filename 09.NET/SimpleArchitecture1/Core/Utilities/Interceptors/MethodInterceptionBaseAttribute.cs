using Castle.DynamicProxy;

namespace Core.Utilities.Interceptors;
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
public abstract class MethodInterceptionBaseAttribute : Attribute, IInterceptor
{
    public virtual void Intercept(IInvocation invocation)
    {

    }
}
