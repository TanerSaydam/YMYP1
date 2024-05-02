using FluentValidation;
using RealWorld.WebAPI.Dtos;
using RealWorld.WebAPI.Logging;
using RealWorld.WebAPI.Models;
using RealWorld.WebAPI.Repositories;
using RealWorld.WebAPI.Validators;
using System.Diagnostics;

namespace RealWorld.WebAPI.Services;

public sealed class UserService(
    IUserRepository userRepository, ILoggerAdapter<UserService> logger) : IUserService
{
    public async Task<List<User>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        logger.LogInformation("Tüm userlar getiriliyor");
        try
        {
            return await userRepository.GetAllAsync(cancellationToken);
        }
        catch(Exception ex) 
        {
            logger.LogError(ex, "User listesi geçerken bir hatayla karşılaştık");
            throw;
        }
        finally
        {
            logger.LogInformation("Tüm user listesi çekildi");
        }
    }

    public async Task<bool> CreateAsync(CreateUserDto request, CancellationToken cancellationToken = default)
    {
        CreateUserDtoValidator validator = new();
        var result = validator.Validate(request);
        if (!result.IsValid)
        {
            throw new ValidationException(string.Join(", ", result.Errors.Select(s=> s.ErrorMessage)));
        }

        var nameIsExist = await userRepository.NameIsExists(request.Name, cancellationToken);
        if (nameIsExist)
        {
            throw new ArgumentException("Bu isim daha önce kaydedilmiş");
        }

        var user = CreateUserDtoToUserObject(request);

        logger.LogInformation("Kullanıcı adı: {0} bu olan kullanıcı kaydı yapılmaya başlandı.", user.Name);
        var stopWatch = Stopwatch.StartNew();
        try
        {
            return await userRepository.CreateAsync(user, cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Kullanıcı kaydı esnasında bir hatayla karşılaştım");            
            throw;
        }
        finally
        {
            stopWatch.Stop();
            logger.LogInformation("User Id: {0} olan kullanıcı {1}ms de oluşturuldu",user.Id, stopWatch.ElapsedMilliseconds);
        }
    }

    public User CreateUserDtoToUserObject(CreateUserDto request)
    {
        return new User()
        {
            Name = request.Name,
            DateOfBirth = request.DateOfBirth,
            Age = request.Age,
        };
    }

    public async Task<bool> DeleteByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        User? user = await userRepository.GetByIdAsync(id, cancellationToken);
        if(user is null)
        {
            throw new ArgumentException("Kullanıcı bulunamadı");
        }

        logger.LogInformation("{0} id numarasına sahip kullanıcı siliniyor...",id);
        var stopWatch = Stopwatch.StartNew();
        try
        {
            return await userRepository.DeleteAsync(user, cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Kullanıcı kaydı silinirken bir hatayla karşılaştık");
            throw;
        }
        finally
        {
            stopWatch.Stop();
            logger.LogInformation("Kullanıcı id'si {0} olan kullanıcı kaydı {1}ms de silindi", user.Id, stopWatch.ElapsedMilliseconds);
        }
    }
}
