namespace VSIXProjectTool1;

[Command(PackageIds.MyCommand)]
internal sealed class MyToolWindowCommand : BaseCommand<MyToolWindowCommand>
{
    protected override Task ExecuteAsync(OleMenuCmdEventArgs e)
    {
        return MyToolWindow.ShowAsync();
    }
}
