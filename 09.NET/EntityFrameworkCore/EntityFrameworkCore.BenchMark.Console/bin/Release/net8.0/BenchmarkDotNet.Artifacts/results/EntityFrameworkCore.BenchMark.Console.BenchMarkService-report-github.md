```

BenchmarkDotNet v0.13.12, Windows 11 (10.0.22631.3007/23H2/2023Update/SunValley3)
AMD Ryzen 5 3600X, 1 CPU, 12 logical and 6 physical cores
.NET SDK 8.0.101
  [Host]     : .NET 8.0.1 (8.0.123.58001), X64 RyuJIT AVX2
  DefaultJob : .NET 8.0.1 (8.0.123.58001), X64 RyuJIT AVX2


```
| Method                      | Mean     | Error   | StdDev   | Ratio | RatioSD |
|---------------------------- |---------:|--------:|---------:|------:|--------:|
| ToListAsyncWithAsNoTracking | 175.9 μs | 3.42 μs |  4.32 μs |  1.00 |    0.00 |
| ToListAsync                 | 182.8 μs | 3.73 μs | 10.83 μs |  1.05 |    0.10 |
