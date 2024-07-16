namespace Core.Utilities.Result.Concrete;

public class ErrorDataResult<T> : DataResult<T>
{
    public ErrorDataResult(T data) : base(data, false)
    {
    }

    public ErrorDataResult(T data, string message) : base(data, false, message)
    {
    }

    public ErrorDataResult(string message) : base(default, false, message)
    {
    }
}
