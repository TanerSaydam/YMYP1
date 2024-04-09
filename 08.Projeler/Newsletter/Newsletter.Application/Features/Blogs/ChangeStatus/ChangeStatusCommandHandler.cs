using GenericRepository;
using MediatR;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;
using TS.Result;

namespace Newsletter.Application.Features.Blogs.ChangeStatus;

internal sealed class ChangeStatusCommandHandler(
    IBlogRepository blogRepository,
    IUnitOfWork unitOfWork) : IRequestHandler<ChangeStatusCommand, Result<string>>
     
{
    public async Task<Result<string>> Handle(ChangeStatusCommand request, CancellationToken cancellationToken)
    {
        Blog? blog = await blogRepository.GetByExpressionWithTrackingAsync(p => p.Id == request.Id, cancellationToken);
        if (blog == null)
        {
            return Result<string>.Failure("Blog not found");
        }

        blog.IsPublish = !blog.IsPublish;
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Change status is successful";
    }
}
