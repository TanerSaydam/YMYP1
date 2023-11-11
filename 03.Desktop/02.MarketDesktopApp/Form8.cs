using _02.MarketDesktopApp.Constants;
using System.Data.SqlClient;

namespace _02.MarketDesktopApp;

public partial class Form8 : Form
{
    int _id;
    Form7 _form7;
    string connectionString = Connection.ConnectionString;
    SqlConnection connection;
    public Form8(Form7 form7,int id)
    {
        InitializeComponent();
        _id = id;
        _form7 = form7;
        connection = new(connectionString);
    }

    private void GetProductById()
    {
        connection.Open();
        string query = "Select Top 1 * from Products where Id=@Id";
        SqlCommand cmd = new(query, connection);
        cmd.Parameters.AddWithValue("@Id", _id);
        SqlDataReader reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            txtName.Text = reader["Name"].ToString();
            txtPrice.Text = reader["Price"].ToString();
        }
        connection.Close();
    }

    private void Form8_Load(object sender, EventArgs e)
    {
        GetProductById();
    }

    private void btnUpdate_Click(object sender, EventArgs e)
    {
        connection.Open();
        string query = "update Products Set Name=@Name, Price=@Price where Id=@Id";
        SqlCommand cmd = new(query, connection);
        cmd.Parameters.AddWithValue("@Id", _id);
        cmd.Parameters.AddWithValue("@Name", txtName.Text);
        cmd.Parameters.AddWithValue("@Price", Convert.ToDecimal(txtPrice.Text));
        cmd.ExecuteNonQuery();
        connection.Close();
        MessageBox.Show("Update is successful", "Update Successful", MessageBoxButtons.OK, MessageBoxIcon.Information);
        _form7.GetAllProduct();
        this.Close();
    }
}
