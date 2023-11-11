Console.WriteLine("Hello, World!");

//[ ] => listeleri temsil eder => array işareyi

//string[] names = { "asdas", "asdasd" };
//index numarası desem => 0'dan başlar
//string[] names = new string[3];
//names[0] = "Taner";
//names[1] = "Taner";
//names[2] = "Taner";

//List<string> names = new List<string>() { "sadasd", "asdasd" };

List<string> names = new(); //örneğe dönüştürmek için new kelimesini kullanıyoruz. Örneğe dönüştürme işleminde yazılımda "instance" üretme deniyor

names.Add("Taner"); //0
names.Add("Taner"); //1
names.Add("Taner"); //2
names.Add("Taner"); //3
names.Add("Taner"); //4
names.Add("Taner"); //5
names.Add("Taner"); //6
names.Add("Taner"); //7
names.Add("Taner"); //8
names.Add("Taner"); //9
names.Add("Taner"); //10
names.Add("Taner"); //11
names.Add("Taner"); //12
names.Add("Taner"); //13

names[12] = "Ahmet";

Console.WriteLine(names.GetType());

//class User
//{
//    public string Name;
//}

//var user1 = new User();
//var user2 = new User();
//var user3 = new User();

////List<User> users = new List<User>();
//List<User> users = new();
