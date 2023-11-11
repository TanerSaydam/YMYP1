namespace FirstDesktopApp;

public partial class Form2 : Form
{
    public Form2()
    {
        InitializeComponent();
    }

    private void btnSignIn_Click(object sender, EventArgs e)
    {
        string userName = txtUserName.Text;
        string password = txtPassword.Text;

        if (userName == "" || userName == null)
        {
            MessageBox.Show("Kullanıcı adı boş olamaz!", "Validation Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return;
        }

        if (string.IsNullOrEmpty(password))
        {
            MessageBox.Show("Şifre boş olamaz!", "Validation Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return;
        }

        if (userName == "test" && password == "1")
        {
            MessageBox.Show("Giriş işlemi başarılı!", "Başarılı", MessageBoxButtons.OK, MessageBoxIcon.Information);
            Form1 form1 = new Form1();
            form1.Show();
        }
        else
        {
            MessageBox.Show("Kullanıcı adı ya da şifre yanlış", "Hata!", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }

    private void Form2_Load(object sender, EventArgs e)
    {
        txtPassword.UseSystemPasswordChar = true;
    }
}
