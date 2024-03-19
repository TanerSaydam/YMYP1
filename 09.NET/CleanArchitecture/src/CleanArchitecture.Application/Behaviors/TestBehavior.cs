using MediatR;

namespace CleanArchitecture.Application.Behaviors;
public sealed class TestBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest: class, IRequest<TResponse>
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        //Rol kontrolü
        //Cacheleme
        //Loglama
        return await next();
    }
}
