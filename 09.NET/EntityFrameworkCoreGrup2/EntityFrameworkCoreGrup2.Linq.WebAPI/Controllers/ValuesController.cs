using AutoMapper;
using EntityFrameworkCoreGrup2.Linq.WebAPI.Context;
using EntityFrameworkCoreGrup2.Linq.WebAPI.DTOs;
using EntityFrameworkCoreGrup2.Linq.WebAPI.Repositories;
using EntityFrameworkCoreGrup2.Linq.WebAPI.Validators;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;


namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController(
    ApplicationDbContext context,
    IMapper mapper,
    ICategoryRepository categoryRepository,
    IUnitOfWork unitOfWork) : ControllerBase
{

    [HttpPost]
    public IActionResult Create(CreateCategoryDto request)
    {

        //CreateCategoryDtoValidator validator = new();
        //ValidationResult result = validator.Validate(request);

        //if(!result.IsValid)
        //{
        //    return BadRequest(result.Errors.Select(s=> s.ErrorMessage));
        //}


        Category category = mapper.Map<Category>(request);
        //try
        //{
           // context.Database.BeginTransaction();

            categoryRepository.Create(category);
            category.Id = 0;
            categoryRepository.Create(category);
            category.Id = 0;
            categoryRepository.Create(category);
            category.Id = 0;
            categoryRepository.Create(category);
            category.Id = 0;
            categoryRepository.Create(category);
            category.Id = 0;
          //  throw new Exception("Hata");
            categoryRepository.Create(category);
             unitOfWork.SaveChanges();


            //context.Database.CommitTransaction();
        //}
        //catch (Exception)
        //{
        //    context.Database.RollbackTransaction();
        //}
        

        return Ok();
    }

    [HttpGet]
    public IActionResult GetAll()
    {

        throw new Exception("asdasda");
        var result = categoryRepository.GetAll();

        return Ok(result);
    }
//    [HttpGet]
//    public IActionResult Get()
//    {
//        List<string> names = new();
//        names.Add("");
//        names.Remove("name");
//        names.AddRange(new List<string>() { "", "" });
//        names.ToList();
//        names.Where(p => p.ToLower().Contains("Taner"));
//        //Created Update Delete
//        //Read
//        //context.Categories.Add();
//        //context.Categories.Remove();
//        //context.Categories.Update();
//        //context.Categories.AddRange();
//        //context.Categories.UpdateRange();
//        //context.Categories.RemoveRange();
//        //context.Categories.ToList();
//        //select * from

//        IQueryable<Category> categories = context.Categories.Where(p => p.Name.StartsWith("t"));


        

//        categories = categories.Where(p => p.Id > new Guid());

//        var deneme = context.Categories.AsQueryable();

//        deneme.ToList();
//        deneme.First();
//        Category? category = context.Categories.FirstOrDefault(p => p.Id == new Guid());
//        if(category is null)
//        {
//            //hata fırlat
//        }
//        //insert into asdasd

//        context.SaveChanges();

//        return Ok(categories);
//    }
}

