using MediatR;
using TS.Result;

namespace Newsletter.Application.Features.Blogs.Create;
public sealed record CreateBlogCommand(
    string Title,
    string Content,
    bool IsPublish) : IRequest<Result<string>>;
