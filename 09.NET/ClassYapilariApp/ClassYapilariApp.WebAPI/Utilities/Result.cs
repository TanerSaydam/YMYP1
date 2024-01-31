namespace ClassYapilariApp.WebAPI.Utilities;

public class Result<T>
{//implicit => bunu araştırın
    public Result(T data)
    {
        Data = data;
    }
    public Result(string message)
    {
        Message = message;
    }
    public Result(int statusCode, string message)
    {
        StatusCode = statusCode;
        IsSuccess = false;
        Message = message;
    }

    public Result(int statusCode, List<string> messages)
    {
        Messages = messages;
        StatusCode = statusCode;
    }

    public T? Data { get; set; }
    public int StatusCode { get; set; } = 200;
    public bool IsSuccess { get; set; } = true;
    public string Message { get; set; } = string.Empty;
    public List<string> Messages { get; set; } = new();
}
