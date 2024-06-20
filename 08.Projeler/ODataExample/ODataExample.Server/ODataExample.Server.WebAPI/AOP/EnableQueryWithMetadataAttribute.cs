using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData.Query;
using System.Text.Json.Serialization;

namespace ODataExample.Server.WebAPI.AOP;

public class EnableQueryWithMetadataAttribute : EnableQueryAttribute
{
    public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
    {
        base.OnActionExecuted(actionExecutedContext);

        if (actionExecutedContext.Result is ObjectResult obj && obj.Value is IQueryable qry)
        {
            obj.Value = new ODataResponse
            {
                Count = actionExecutedContext.HttpContext.Request.ODataFeature().TotalCount,
                Value = qry
            };
        }
    }
    public class ODataResponse
    {
        [JsonPropertyName("@odata.count")]
        public long? Count { get; set; }

        [JsonPropertyName("value")]
        public IQueryable Value { get; set; }
    }
}