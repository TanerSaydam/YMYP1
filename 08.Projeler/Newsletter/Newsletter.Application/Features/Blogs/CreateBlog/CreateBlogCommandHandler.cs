using AutoMapper;
using GenericRepository;
using MediatR;
using Newsletter.Application.Extensions;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;
using TS.Result;

namespace Newsletter.Application.Features.Blogs.Create;

internal sealed class CreateBlogCommandHandler(
    IBlogRepository blogRepository,
    IUnitOfWork unitOfWork,
    IMapper mapper) : IRequestHandler<CreateBlogCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CreateBlogCommand request, CancellationToken cancellationToken)
    {
        Blog blog = mapper.Map<Blog>(request);
        blog.PublishDate = request.IsPublish ? DateTime.UtcNow : null;
        blog.Url = request.Title.ConvertTitleToUrl();

        await blogRepository.AddAsync(blog, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Blog create is successful";
    }

    
}
