namespace Core.Utilities.Result.Abstract;

public interface IDataResult<T> : IResult
{
    T Data { get; set; }
}
