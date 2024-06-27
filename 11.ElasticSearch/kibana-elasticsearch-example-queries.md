//Index oluşturur
```bash
PUT /my_index
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
  },
  "mappings": {
    "properties": {
      "firstName": {"type": "text"},
      "lastName": {"type": "text"},
      "age":  {"type": "integer"}
    }
  }
}
```

//Kayıt ekler
```bash
POST /my_index/_doc
{
  "firstName": "Taner",
  "lastName": "Saydam",
  "age": 34
}
```

//Id li kaydı getirir
```bash
GET /my_index/_doc/znAAW5ABlMybV335yuA0
```

//Tüm kaydı getirir (eğer getirilen veri sayısını sınırlamak istersek "size": 1000, bunu kullanıyoruz) 
```bash
GET /my_index/_search
{
  "size": 1000,
  "query": {
    "match_all": {}
  }
}
```

//Güncelleme
```bash
POST /my_index/_update/znAAW5ABlMybV335yuA0
{
  "doc": {
    "firstName": "Toprak"
  }
}
```

//Silme
```bash
DELETE /my_index/_doc/z3AEW5ABlMybV335MuDU
```

//Toplu Silme
```bash
POST /my_index/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}
```

//Indexi Silme
```bash
DELETE /my_index

//Mevcut Index listesi
```bash
GET /_cat/indices?v
```