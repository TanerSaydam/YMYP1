using _02.MarketDesktopApp.Constants;
using System.ComponentModel;
using System.Data.SqlClient;

namespace _02.MarketDesktopApp;

public partial class Form7 : Form
{
    string connectionString = Connection.ConnectionString;
    SqlConnection connection;
    private Form5 _form;
    public Form7(Form5 form5)
    {
        InitializeComponent();
        connection = new(connectionString);
        _form = form5;
    }

    private void Form7_Load(object sender, EventArgs e)
    {
        GetAllProduct();        
    }

    public void GetAllProduct()
    {
        dgProducts.Rows.Clear();

        connection.Open();
        string query = "Select * From Products Order by Name";
        SqlCommand cmd = new(query, connection);
        SqlDataReader reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            dgProducts.Rows.Add();
            int count = dgProducts.RowCount - 1;

            dgProducts.Rows[count].Cells["Count"].Value = count + 1;
            dgProducts.Rows[count].Cells["PId"].Value = reader["Id"];
            dgProducts.Rows[count].Cells["PName"].Value = reader["Name"];
            dgProducts.Rows[count].Cells["Price"].Value = reader["Price"];
        }
        connection.Close();
    }

    private void btnSave_Click(object sender, EventArgs e)
    {
        string name = txtName.Text;
        decimal price = Convert.ToDecimal(txtPrice.Text);

        connection.Open();
        string query = "Insert into Products Values(@Name,@Price)";
        SqlCommand cmd = new(query, connection);
        cmd.Parameters.AddWithValue("@Name", name);
        cmd.Parameters.AddWithValue("@Price", price);
        cmd.ExecuteNonQuery();

        connection.Close();

        MessageBox.Show("Product save is successful", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
        txtName.Text = "";
        txtPrice.Text = "0";
        txtName.Focus();
    }

    private void tabControl1_SelectedIndexChanged(object sender, EventArgs e)
    {
        string value = tabControl1.SelectedTab.Text;
        if (value == "Products")
        {
            GetAllProduct();
        }
    }

    private void Form7_FormClosing(object sender, FormClosingEventArgs e)
    {
        _form.Show();
    }

    private void dgProducts_CellClick(object sender, DataGridViewCellEventArgs e)
    {
        if (dgProducts.Columns[e.ColumnIndex].Name == "BtnEdit")
        {
            int id = Convert.ToInt32(dgProducts.CurrentRow.Cells["PId"].Value);
            Form8 form8 = new(this,id);
            form8.Show();
        }

        if (dgProducts.Columns[e.ColumnIndex].Name == "BtnRemove")
        {
            if(MessageBox.Show("You want to remove this record?","Remove",MessageBoxButtons.YesNo,MessageBoxIcon.Question) == DialogResult.Yes)
            {
                int id = Convert.ToInt32(dgProducts.CurrentRow.Cells["PId"].Value);
                bool result = CheckProductHasBeenSold(id);
                if(!result) return;

                RemoveProductById(id);
            }
        }
    }

    private bool CheckProductHasBeenSold(int id)
    {
        connection.Open();
        string query = "Select * From ReceiptDetails where ProductId=@ProductId";
        SqlCommand cmd = new(query, connection);
        cmd.Parameters.AddWithValue("@ProductId", id);
        SqlDataReader reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            MessageBox.Show("This product cannot be deleted because it has been sold", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            connection.Close();
            return false;
        }
        else
        {
            connection.Close();
            return true;
        }
    }

    private void RemoveProductById(int id)
    {        
        connection.Open();
        string query = "Delete From Products Where Id=@Id";
        SqlCommand cmd = new(query, connection);
        cmd.Parameters.AddWithValue("@Id", id);
        cmd.ExecuteNonQuery();

        connection.Close();
        GetAllProduct();
    }
}
