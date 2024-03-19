# Redis Kurulumu

## Windows için
- Denetim masasý Program Ekle kaldýrdan Windows Özellikleri Aç Kapat menüsünden Windows Subsystem For Linux seçeneðini iþaretle
- Microsoft Store Ubuntu Programýný kur
- Aþaðýdaki kodlarý sýrayla çalýþtýr	
** sudo apt update
** sudo apt install redis-server
** redis-server
** redis-cli pin //çalýþýp çalýþmadýðýný kontrol için. Eðer çalýþýyorsa PONG cevabý gelir

Not: Ýstersek buradaki repodan direkt bir install ile kurabiliyoruz: https://github.com/tporadowski/redis/releases

## Docker ile
docker run --name redis-cache -p 6379:6379 -d redis

**  docker exec -it redis-cache redis-cli ping  //çalýþýp çalýþmadýðýný kontrol için. Eðer çalýþýyorsa PONG cevabý gelir