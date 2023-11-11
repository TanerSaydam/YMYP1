using _02.MarketDesktopApp.Constants;
using System.Data.SqlClient;
using System.Windows.Forms;
using System.Windows.Forms.VisualStyles;
using Excel = Microsoft.Office.Interop.Excel;

namespace _02.MarketDesktopApp;

public partial class Form6 : Form
{
    string connectionString = Connection.ConnectionString;
    SqlConnection connection;
    public Form6()
    {
        InitializeComponent();
        connection = new(connectionString);
    }

    private void Form6_Load(object sender, EventArgs e)
    {
        GetReceipts();
    }

    private void GetReceipts()
    {
        connection.Open();
        SqlCommand cmd = new("SELECT * FROM Receipts Order By Date Desc", connection);
        SqlDataReader reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            dgReceipts.Rows.Add();
            int rowCount = dgReceipts.Rows.Count - 1;

            dgReceipts.Rows[rowCount].Cells["Count"].Value = rowCount + 1;
            dgReceipts.Rows[rowCount].Cells["RId"].Value = reader["Id"];
            dgReceipts.Rows[rowCount].Cells["ReceiptNumber"].Value = reader["ReceiptNumber"];
            dgReceipts.Rows[rowCount].Cells["Date"].Value = reader["Date"];
            dgReceipts.Rows[rowCount].Cells["Total"].Value = reader["Total"];
            dgReceipts.Rows[rowCount].Cells["Payment"].Value = reader["Payment"];
            dgReceipts.Rows[rowCount].Cells["Remaining"].Value = reader["Remaining"];
        }

        connection.Close();
    }

    private void dgReceipts_Click(object sender, EventArgs e)
    {
        dgReceiptDetails.Rows.Clear();

        DataGridViewRow row = dgReceipts.CurrentRow;
        if (row != null && !row.IsNewRow)
        {
            object value = row.Cells["ReceiptNumber"].Value;
            string receiptNumber = value?.ToString();

            connection.Open();
            SqlCommand receiptCmd = new("Select * from Receipts where ReceiptNumber=@ReceiptNumber", connection);
            receiptCmd.Parameters.AddWithValue("@ReceiptNumber", receiptNumber);
            SqlDataReader receiptReader = receiptCmd.ExecuteReader();
            if (receiptReader.Read())
            {
                int receiptId = (int)receiptReader["Id"];

                receiptReader.Close();
                GetReceiptDetails(receiptId);
                GetReceiptPayments(receiptId);
            }

            connection.Close();
        }
    }

    private void GetReceiptPayments(int receiptId)
    {
        SqlCommand receiptPaymentCmd = new("Select * From ReceiptPayments Where ReceiptId=@ReceiptId", connection);
        receiptPaymentCmd.Parameters.AddWithValue("@ReceiptId", receiptId);
        SqlDataReader receiptPaymentReader = receiptPaymentCmd.ExecuteReader();
        dgReceiptPayments.Rows.Clear();
        while (receiptPaymentReader.Read())
        {
            dgReceiptPayments.Rows.Add();
            int dgReceiptPaymentsCount = dgReceiptPayments.Rows.Count - 1;

            dgReceiptPayments.Rows[dgReceiptPaymentsCount].Cells["RPCount"].Value = dgReceiptPaymentsCount + 1;
            dgReceiptPayments.Rows[dgReceiptPaymentsCount].Cells["RPType"].Value = receiptPaymentReader["Type"];
            dgReceiptPayments.Rows[dgReceiptPaymentsCount].Cells["RPAmount"].Value = receiptPaymentReader["Amount"];
        }
        dgReceiptPayments.ClearSelection();
        receiptPaymentReader.Close();
    }

    private void GetReceiptDetails(int receiptId)
    {
        SqlCommand receiptDetailsCmd = new("select p.Name as Name, rd.Quantity as Quantity, rd.Price as Price, rd.Total as Total from ReceiptDetails as rd Left Join Products as p on rd.ProductId = p.Id where ReceiptId =@ReceiptId", connection);
        receiptDetailsCmd.Parameters.AddWithValue("@ReceiptId", receiptId);

        SqlDataReader receiptDetailReader = receiptDetailsCmd.ExecuteReader();
        while (receiptDetailReader.Read())
        {
            dgReceiptDetails.Rows.Add();
            int dgRDCount = dgReceiptDetails.Rows.Count - 1;

            dgReceiptDetails.Rows[dgRDCount].Cells["RDCount"].Value = dgRDCount + 1;
            dgReceiptDetails.Rows[dgRDCount].Cells["RDProductName"].Value = receiptDetailReader["Name"];
            dgReceiptDetails.Rows[dgRDCount].Cells["RDQuantity"].Value = receiptDetailReader["Quantity"];
            dgReceiptDetails.Rows[dgRDCount].Cells["RDPrice"].Value = receiptDetailReader["Price"];
            dgReceiptDetails.Rows[dgRDCount].Cells["RDTotal"].Value = receiptDetailReader["Total"];
        }

        receiptDetailReader.Close();
        dgReceiptDetails.ClearSelection();
    }

    private void dgReceipts_CellContentClick(object sender, DataGridViewCellEventArgs e)
    {
        if (dgReceipts.Columns[e.ColumnIndex].Name == "BtnPrint")
        {
            int id = Convert.ToInt32(dgReceipts.CurrentRow.Cells["RId"].Value);
            connection.Open();
            string query = "select p.Name as Name, rd.Quantity as Quantity, rd.Price as Price, rd.Total as Total from ReceiptDetails as rd Left Join Products as p on rd.ProductId = p.Id where ReceiptId =@ReceiptId";
            SqlCommand cmd = new(query, connection);
            cmd.Parameters.AddWithValue("@ReceiptId", id);
            SqlDataReader reader = cmd.ExecuteReader();

            Excel.Application app = new();

            Excel.Workbook book;
            Excel.Worksheet sheet;
            object misValue = System.Reflection.Missing.Value;
            book = app.Workbooks.Add(misValue);
            sheet = (Excel.Worksheet)book.Worksheets["Sayfa1"];

            sheet.Cells[1,1] = "TANER MARKET RECEIPT";

            sheet.Range["A1", "C1"].Merge(true);            
            sheet.Range["A2", "C2"].Merge(true);
            sheet.Range["B3", "C3"].Merge(true);

            sheet.Range["A1:A2"].Font.Color = Color.Red;
            sheet.Range["A1:C5"].Font.Bold = true;
            sheet.Range["A1:C1"].EntireColumn.ColumnWidth = 16.29;

            sheet.Range["A1:A1"].HorizontalAlignment = 3;
            sheet.Range["A1:A1"].VerticalAlignment = 2;
            sheet.Range["A2:A2"].HorizontalAlignment = 3;
            sheet.Range["A2:A2"].VerticalAlignment = 2;

            sheet.Range["A2"].NumberFormat = "dd.MM.yyyy HH:mm:ss";
            sheet.Range["C:C"].NumberFormat = "₺#,##0.00";

            sheet.Cells[2,1] = DateTime.Now.ToString();
            sheet.Cells[3,1] = "Receipt Number";
            sheet.Cells[3,2] = "460744F7-C531-418D-8467-9F77522EB372";
            sheet.Cells[5,1] = "Name";
            sheet.Cells[5,2] = "Quantity";
            sheet.Cells[5,3] = "Price";

            int rowCount = 6;
            while (reader.Read())
            {
                sheet.Cells[rowCount, 1] = reader["Name"];
                sheet.Cells[rowCount, 2] = reader["Quantity"];
                sheet.Cells[rowCount, 3] = reader["Price"];
                rowCount++;
            }

            connection.Close();

            //int lastCount = sheet.Range["A1"].Rows.Count +1;
            sheet.Range["A5:C" + (rowCount-1)].Borders.LineStyle = 1;



            sheet.Range["B" + (rowCount)].Value = "Total";
            sheet.Range["C" + (rowCount)].Value = 15.2;
            sheet.Range["B" + (rowCount + 1)].Value = "Payment";
            sheet.Range["C" + (rowCount + 1)].Value = 15.2;
            sheet.Range["B" + (rowCount + 2)].Value = "Remaining";
            sheet.Range["C" + (rowCount + 2)].Value = 0;

            //int totalPartCount = sheet.Range["C1"].Rows.Count;
            sheet.Range["B" + rowCount + ":C" + (rowCount + 2)].Borders.LineStyle = 1;
            sheet.Range["C" + (rowCount + 2)].Font.Color = Color.Red;
            sheet.Range["C" + (rowCount + 2)].Font.Bold = true;


           // sheet.PrintOutEx(1);
            book.SaveAs("C:\\1\\Receipt.xlsx");
            book.Close(true,misValue,misValue);
            app.Quit();
            //app.Visible = true;
        }
    }
}
