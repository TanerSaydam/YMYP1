namespace FirstDesktopApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            string profession = cbProfession.Text;
            MessageBox.Show(profession, "Uyarý!", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
        }
    }
}