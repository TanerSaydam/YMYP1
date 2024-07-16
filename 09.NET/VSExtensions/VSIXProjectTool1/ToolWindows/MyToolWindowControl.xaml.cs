using System.Windows;
using System.Windows.Controls;

namespace VSIXProjectTool1;
public partial class MyToolWindowControl : UserControl
{
    public MyToolWindowControl()
    {
        InitializeComponent();
    }

    private void button1_Click(object sender, RoutedEventArgs e)
    {

        VS.MessageBox.Show("VSIXProjectTool1", "Button clicked");
    }
}