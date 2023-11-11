using _02.MarketDesktopApp.Constants;
using System.Data.SqlClient;

namespace _02.MarketDesktopApp;

public partial class Form5 : Form
{
    decimal total = 0;
    decimal remaining = 0;
    List<ReceiptDetail> receiptDetails = new();
    List<ReceiptPayment> receiptPayments = new();

    public Form5()
    {
        InitializeComponent();
    }

    private void txtBarcode_KeyPress(object sender, KeyPressEventArgs e)
    {
        if (e.KeyChar == 13)
        {

            connection.Open();

            int id = 0;
            if (!int.TryParse(txtBarcode.Text, out id))
            {
                MessageBox.Show("Sadece numaretik değerler girebilrisiniz!", "Hata!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            string query = "Select TOP 1 * FROM Products where Id=" + id;
            SqlCommand command = new(query, connection);
            SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                var name = reader["Name"].ToString();
                var price = (decimal)reader["Price"];
                AddShoppingCart(id, name, price);
            }
            else
            {
                MessageBox.Show("Ürün bulunamadı", "Hata!", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            connection.Close();

        }
    }

    private void AddShoppingCart(int id, string name, decimal price)
    {
        dgList.Rows.Add();
        int count = dgList.Rows.Count - 1;

        dgList.Rows[count].Cells[0].Value = count + 1; //#
        dgList.Rows[count].Cells[1].Value = name; //Name
        dgList.Rows[count].Cells[2].Value = 1; //Quantity
        dgList.Rows[count].Cells[3].Value = price; //Price
        dgList.Rows[count].Cells[4].Value = (price * 1).ToString("#,##0.00") + " ₺"; //Total Price

        txtBarcode.Text = "";

        total = 0;

        for (int i = 0; i < dgList.Rows.Count; i++)
        {
            total += (Convert.ToDecimal(dgList.Rows[i].Cells["Quantity"].Value) * Convert.ToDecimal(dgList.Rows[i].Cells["Price"].Value));
        }

        lbTotal.Text = total.ToString("#,##0.00") + " ₺";


        decimal totalPayment = 0;
        for (int i = 0; i < dgPayment.Rows.Count; i++)
        {
            totalPayment += Convert.ToDecimal(dgPayment.Rows[i].Cells[1].Value);
        }

        remaining = total - totalPayment;

        lbRemaing.Text = remaining.ToString("#,##0.00") + " ₺";
        txtPayment.Text = remaining.ToString();


        ReceiptDetail receiptDetail = new()
        {
            Price = price,
            Total = price * 1,
            ProductId = id,
            ReceiptId = 1,
            Quantity = 1
        };
        receiptDetails.Add(receiptDetail);
    }

    private void btnKK_Click(object sender, EventArgs e)
    {
        string payment = txtPayment.Text;
        dgPayment.Rows.Add("Credit Card", payment);
        txtPayment.Text = "0";

        remaining -= Convert.ToDecimal(payment);
        if (remaining <= 0) gbPayment.Enabled = false;
        lbRemaing.Text = remaining.ToString("#,##0.00") + " ₺";


        ReceiptPayment receiptPayment = new()
        {
            ReceiptId = 1,
            Amount = Convert.ToDecimal(payment),
            Type = "Credit Card"
        };
        receiptPayments.Add(receiptPayment);
    }

    private void btnCash_Click(object sender, EventArgs e)
    {
        string payment = txtPayment.Text;
        dgPayment.Rows.Add("Cash", payment);
        txtPayment.Text = "0";


        remaining -= Convert.ToDecimal(payment);

        if (remaining <= 0) gbPayment.Enabled = false;
        lbRemaing.Text = remaining.ToString("#,##0.00") + " ₺";

        ReceiptPayment receiptPayment = new()
        {
            ReceiptId = 1,
            Amount = Convert.ToDecimal(payment),
            Type = "Cash"
        };
        receiptPayments.Add(receiptPayment);
    }

    private void btnReset_Click(object sender, EventArgs e)
    {
        Clear();
    }

    private void Clear()
    {
        dgList.Rows.Clear();
        dgPayment.Rows.Clear();
        lbRemaing.Text = "0,00 ₺";
        lbTotal.Text = "0,00 ₺";
        txtPayment.Text = "0";
        total = 0;
        remaining = 0;
        gbPayment.Enabled = true;
        txtBarcode.Focus();
        receiptDetails = new();
        receiptPayments = new();
        receiptId = 0;
    }

    int receiptId = 0;
    SqlConnection connection = new(Connection.ConnectionString);

    private void btnComplete_Click(object sender, EventArgs e)
    {
        if (remaining > 0)
        {
            MessageBox.Show("Tüm ödeme yapılmadı!", "Hata!", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return;
        }

        //transaction

        connection.Open();

        SqlTransaction transaction = connection.BeginTransaction();

        try
        {
            Guid receiptNumber = Guid.NewGuid();
            string query = "Insert into Receipts(Date,Total,Payment,Remaining,ReceiptNumber) Values(@Date,@Total,@Payment,@Remaining,@ReceipNumber)";

            SqlCommand command = new(query, connection, transaction);
            command.Parameters.AddWithValue("@Date", DateTime.Now);
            command.Parameters.AddWithValue("@Total", total);
            command.Parameters.AddWithValue("@Payment", total - remaining);
            command.Parameters.AddWithValue("@Remaining", remaining);
            command.Parameters.AddWithValue("@ReceipNumber", receiptNumber);
            command.ExecuteNonQuery();


            SqlCommand getIdCommand = new($"Select TOP 1 Id From Receipts Where ReceiptNumber=@receiptNumber", connection, transaction);
            getIdCommand.Parameters.AddWithValue("@receiptNumber", receiptNumber);
            SqlDataReader reader = getIdCommand.ExecuteReader();
            if (!reader.Read())
            {
                reader.Close();
                connection.Close();
                return;
            }

            receiptId = (int)reader["Id"];
            reader.Close();



            foreach (var detail in receiptDetails)
            {
                string detailQuery = $"insert into ReceiptDetails Values(@ReceiptId,@ProductId,@Quantity,@Price,@Total)";
                SqlCommand detailCommand = new(detailQuery, connection, transaction);
                detailCommand.Parameters.AddWithValue("@ReceiptId", receiptId);
                detailCommand.Parameters.AddWithValue("@ProductId", detail.ProductId);
                detailCommand.Parameters.AddWithValue("@Quantity", detail.Quantity);
                detailCommand.Parameters.AddWithValue("@Price", detail.Price);
                detailCommand.Parameters.AddWithValue("@Total", detail.Total);


                detailCommand.ExecuteNonQuery();
            }

            foreach (var payment in receiptPayments)
            {
                string paymentQuery = $"insert into ReceiptPayments Values(@ReceiptId,@Type,@Amount)";
                SqlCommand paymentCommand = new(paymentQuery, connection, transaction);
                paymentCommand.Parameters.AddWithValue("@ReceiptId", receiptId);
                paymentCommand.Parameters.AddWithValue("@Type", payment.Type);
                paymentCommand.Parameters.AddWithValue("@Amount", payment.Amount);

                paymentCommand.ExecuteNonQuery();
            }

            transaction.Commit();

            Clear();

            MessageBox.Show("Alış-veriş başarıyla tamamlandı!", "Başarılı", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        catch (Exception ex)
        {
            transaction.Rollback();
            MessageBox.Show($"Kayıt esnasında bir hatayla karşılaştık \n{ex.Message}", "Hata!", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            connection.Close();
        }


    }

    private void Form5_Load(object sender, EventArgs e)
    {

    }

    private void receiptsToolStripMenuItem_Click(object sender, EventArgs e)
    {
        Form6 form6 = new();
        form6.Show();
    }
        
    private void addProductToolStripMenuItem_Click(object sender, EventArgs e)
    {
        Form7 form7 = new(this);
        form7.Show();
        this.Hide();
    }
}


public class ReceiptDetail
{
    public int ReceiptId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal Total { get; set; }
}

public class ReceiptPayment
{
    public int ReceiptId { get; set; }
    public string Type { get; set; }
    public decimal Amount { get; set; }
}

