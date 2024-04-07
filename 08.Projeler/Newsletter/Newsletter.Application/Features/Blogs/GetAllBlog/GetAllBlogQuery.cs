using MediatR;
using Newsletter.Domain.Entities;
using TS.Result;

namespace Newsletter.Application.Features.Blogs.GetAllBlog;
public sealed record GetAllBlogQuery(
    string Search) : IRequest<Result<List<Blog>>>;

