using AutoMapper;
using GenericRepository;
using MediatR;
using Newsletter.Application.Extensions;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Events;
using Newsletter.Domain.Repositories;
using TS.Result;

namespace Newsletter.Application.Features.Blogs.Create;

internal sealed class CreateBlogCommandHandler(
    IBlogRepository blogRepository,
    IUnitOfWork unitOfWork,
    IMapper mapper,
    IMediator mediator) : IRequestHandler<CreateBlogCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CreateBlogCommand request, CancellationToken cancellationToken)
    {
        Blog blog = mapper.Map<Blog>(request);        
        blog.Url = request.Title.ConvertTitleToUrl();

        await blogRepository.AddAsync(blog, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        if (blog.IsPublish)
        {
            await mediator.Publish(new BlogEvent(blog.Id));
        }

        return "Blog create is successful";
    }

    
}
