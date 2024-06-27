// Elastic search de bire çok ilişki yapıp sorguda getirmeye çalıştık ama beceremedik :)

//Category index oluşturma
```bash
PUT /category
{
  "mappings": {
    "properties": {
      "name": {"type": "text"},
      "categoryId": { "type": "keyword" }
    }
  }
}
```

//Product index oluşturma
//Product tablomuz category ile bire-çok ilişki içerisinde
```bash
PUT /product
{
  "mappings": {
    "properties": {
      "name": {"type": "text"},
      "price": {"type": "double"},
      "categoryId": {"type": "keyword"}
    }
  }
}
```

//Örnek kategoriler ekleme
```bash
POST /category/_doc/1
{
  "categoryId": "1",
  "name":"Elektronik"
}

POST /category/_doc/2
{
  "categoryId": "2",
  "name":"Kitaplar"
}
```


//Örnek ürünler ekleme
POST /product/_doc
{
  "name": "Laptop",
  "price": 1000,
  "categoryId": "1"
}

POST /product/_doc
{
  "name": "Telefon",
  "price": 2000,
  "categoryId": "1"
}

POST /product/_doc
{
  "name": "Clean Architecture",
  "price": 350,
  "categoryId": "2"
}

POST /product/_doc
{
  "name": "DDD",
  "price": 250,
  "categoryId": "2",
  "imageUrl": "https://m.media-amazon.com/images/I/71Qde+ZerdL._AC_UF1000,1000_QL80_.jpg"
}
```

//Product listesini category bilgisiyle getirme
```bash
GET /product/_search
{
  "size": 1000,
  "query": {
    "match_all": {}
  },
  "aggs": {
    "categories": {
      "terms": {
        "field": "categoryId"
      },
      "aggs": {
      "category_info": {
        "top_hits": {
          "_source": {
            "includes": "[name]"
          },
          "size": 1
        }
      }
    }
    }
  }
}
```

//id alanında ilişkili arama yapabilmemiz için bu ayarı yapmamız gerekiyor
```bash
PUT /_cluster/settings
{
  "persistent": {
    "indices.id_field_data.enabled": true
  }
}
```

//Category listesini product listesiyle getirme
```bash
GET /category/_search
{
  "query": {
    "match_all": {}
  },
  "aggs": {
    "products": {
      "terms": {
        "field": "categoryId"
      },
      "aggs": {
        "product_info": {
          "top_hits": {
            "_source": {
              "includes": ["name", "price"]
            }
          }
        }
      }
    }
  }
}
```
