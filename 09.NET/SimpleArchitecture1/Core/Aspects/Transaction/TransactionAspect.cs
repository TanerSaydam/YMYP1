using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using System.Transactions;

namespace Core.Aspects.Transaction;
public class TransactionAspect : MethodInterception
{
    public override void Intercept(IInvocation invocation)
    {
        //async metotlarda bu aspect çalışmıyor. 
        invocation.Proceed();

        //using (TransactionScope transaction = new TransactionScope())
        //{
        //    try
        //    {
        //        invocation.Proceed();
        //        transaction.Complete();
        //    }
        //    catch (Exception)
        //    {
        //        transaction.Dispose();
        //        throw;
        //    }
        //}
    }
}
