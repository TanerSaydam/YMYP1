using System.Collections.Generic;
using System.Linq;

namespace VSIXProject1;

[Command(PackageIds.MyCommand)]
internal sealed class MyCommand : BaseCommand<MyCommand>
{
    protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
    {
        var docView = await VS.Documents.GetActiveDocumentViewAsync();
        string filePath = docView.FilePath.Replace("\\", "/");
        List<string> paths = filePath.Split('/').ToList();

        if (!filePath.Contains("Entities"))
        {
            await VS.MessageBox.ShowErrorAsync("Entities klasörü haricinde işlem yapamazsınız");
            return;
        }

        string projectPath = "";
        foreach (var path in paths)
        {
            if (path != "Entities")
            {
                projectPath += path + "/";
            }
            else
            {
                projectPath += path;
                break;
            }
        }

        List<string> projectPaths = projectPath.Split('/').ToList();
        string namespaceName = projectPaths[4] + "." + projectPaths[5];

        string content = @$"namespace {namespaceName};
public sealed class Test
{{
}}
";
        projectPath += "/Test.cs";


        System.IO.File.WriteAllText(projectPath, content);

        await VS.MessageBox.ShowWarningAsync("Test.cs created");
    }
}
