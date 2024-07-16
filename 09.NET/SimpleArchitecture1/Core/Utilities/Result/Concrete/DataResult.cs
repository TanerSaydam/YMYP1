using Core.Utilities.Result.Abstract;

namespace Core.Utilities.Result.Concrete;
public class DataResult<T> : Result, IDataResult<T>
{
    public DataResult(T data, bool success) : base(success)
    {
        Data = data;
    }

    public DataResult(T data, bool success, string message) : base(success, message)
    {
        Data = data;
    }

    public T Data { get; set; }
}
