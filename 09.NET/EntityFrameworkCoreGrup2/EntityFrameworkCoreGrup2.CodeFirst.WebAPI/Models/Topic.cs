namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Models;

public class Topic
{
    public int TopicId { get; set; }
    public string TopicName { get; set; }
    public int LessonId { get; set; }
    public Lesson Lesson { get; set; }
}

public class Lesson
{
    public int LessonId { get; set; }
    public string LessonName { get; set;}
    public string LessonType { get; set; }
    public string LessonField { get; set; }
    public List<Topic> Topics { get; set; }
}
