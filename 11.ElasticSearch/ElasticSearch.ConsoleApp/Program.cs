using Nest;

#region CONNECTION
var settings = new ConnectionSettings(new Uri("http://localhost:9200"))
    .DefaultIndex("product");
ElasticClient client = new(settings);
#endregion

#region CREATE
//var product2 = new Product()
//{
//    // Id = Guid.NewGuid().ToString(),
//    Name = "New Product",
//    Price = 1000,
//    ImageUrl = ""
//};

//var createResponse = await client.IndexDocumentAsync(product2);
#endregion

#region GETBYID
var getByIdResponse = await client.GetAsync<Product>("6XAcW5ABlMybV3353ODh");

var product = getByIdResponse.Source;
product.Id = getByIdResponse.Id;
#endregion

#region UPDATE
//product.Name = "updatedName2";

//var updateResponse = await client.UpdateAsync<Product>(product.Id, u => u.Doc(product));
#endregion

#region DELETE
//var deleteResponse = await client.DeleteAsync<Product>(product.Id);
#endregion

#region GETALL
var getAllResponse = await client.SearchAsync<Product>(s => s
    .MatchAll()
    .Size(1000)
);

List<Product> products = new List<Product>();
foreach (var hit in getAllResponse.Hits)
{
    Product newProduct = hit.Source;
    newProduct.Id = hit.Id;
    products.Add(newProduct);
}
#endregion


Console.ReadLine();


public class Product
{
    public string Id { get; set; } = default!;
    public string Name { get; set; } = default!;
    public decimal Price { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
}