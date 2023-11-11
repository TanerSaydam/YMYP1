namespace BookStoreServer.WebApi.Dtos;

public sealed class ResponseDto<T> //generic => T
{
    public T Data { get; set; }
    public int TotalPageCount { get; set; } //10
    public int PageNumber { get; set; } //2
    public int PageSize { get; set; } //10
    public bool IsFirstPage { get; set; } //false
    public bool IsLastPage { get; set; } //false
}