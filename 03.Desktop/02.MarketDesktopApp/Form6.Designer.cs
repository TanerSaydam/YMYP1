namespace _02.MarketDesktopApp
{
    partial class Form6
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            DataGridViewCellStyle dataGridViewCellStyle6 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle7 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle8 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle9 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle1 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle2 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle3 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle4 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle5 = new DataGridViewCellStyle();
            dgReceipts = new DataGridView();
            dgReceiptDetails = new DataGridView();
            RDCount = new DataGridViewTextBoxColumn();
            RDProductName = new DataGridViewTextBoxColumn();
            RDQuantity = new DataGridViewTextBoxColumn();
            RDPrice = new DataGridViewTextBoxColumn();
            RDTotal = new DataGridViewTextBoxColumn();
            dgReceiptPayments = new DataGridView();
            RPCount = new DataGridViewTextBoxColumn();
            RPType = new DataGridViewTextBoxColumn();
            RPAmount = new DataGridViewTextBoxColumn();
            Count = new DataGridViewTextBoxColumn();
            RId = new DataGridViewTextBoxColumn();
            ReceiptNumber = new DataGridViewTextBoxColumn();
            Date = new DataGridViewTextBoxColumn();
            Total = new DataGridViewTextBoxColumn();
            Payment = new DataGridViewTextBoxColumn();
            Remaining = new DataGridViewTextBoxColumn();
            BtnPrint = new DataGridViewButtonColumn();
            ((System.ComponentModel.ISupportInitialize)dgReceipts).BeginInit();
            ((System.ComponentModel.ISupportInitialize)dgReceiptDetails).BeginInit();
            ((System.ComponentModel.ISupportInitialize)dgReceiptPayments).BeginInit();
            SuspendLayout();
            // 
            // dgReceipts
            // 
            dgReceipts.AllowUserToAddRows = false;
            dgReceipts.AllowUserToDeleteRows = false;
            dgReceipts.AllowUserToResizeRows = false;
            dgReceipts.BackgroundColor = SystemColors.ButtonFace;
            dgReceipts.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgReceipts.Columns.AddRange(new DataGridViewColumn[] { Count, RId, ReceiptNumber, Date, Total, Payment, Remaining, BtnPrint });
            dgReceipts.EditMode = DataGridViewEditMode.EditProgrammatically;
            dgReceipts.Location = new Point(12, 12);
            dgReceipts.Name = "dgReceipts";
            dgReceipts.RowHeadersVisible = false;
            dgReceipts.RowTemplate.Height = 25;
            dgReceipts.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dgReceipts.Size = new Size(1347, 385);
            dgReceipts.TabIndex = 0;
            dgReceipts.CellContentClick += dgReceipts_CellContentClick;
            dgReceipts.Click += dgReceipts_Click;
            // 
            // dgReceiptDetails
            // 
            dgReceiptDetails.AllowUserToAddRows = false;
            dgReceiptDetails.AllowUserToResizeRows = false;
            dgReceiptDetails.BackgroundColor = SystemColors.ButtonFace;
            dgReceiptDetails.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgReceiptDetails.Columns.AddRange(new DataGridViewColumn[] { RDCount, RDProductName, RDQuantity, RDPrice, RDTotal });
            dgReceiptDetails.EditMode = DataGridViewEditMode.EditProgrammatically;
            dgReceiptDetails.Location = new Point(13, 417);
            dgReceiptDetails.Name = "dgReceiptDetails";
            dgReceiptDetails.RowHeadersVisible = false;
            dgReceiptDetails.RowTemplate.Height = 25;
            dgReceiptDetails.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dgReceiptDetails.Size = new Size(786, 350);
            dgReceiptDetails.TabIndex = 1;
            // 
            // RDCount
            // 
            RDCount.HeaderText = "#";
            RDCount.Name = "RDCount";
            // 
            // RDProductName
            // 
            RDProductName.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            RDProductName.HeaderText = "Product Name";
            RDProductName.Name = "RDProductName";
            // 
            // RDQuantity
            // 
            dataGridViewCellStyle6.Format = "c2";
            RDQuantity.DefaultCellStyle = dataGridViewCellStyle6;
            RDQuantity.HeaderText = "Quantity";
            RDQuantity.Name = "RDQuantity";
            // 
            // RDPrice
            // 
            RDPrice.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle7.Format = "c2";
            RDPrice.DefaultCellStyle = dataGridViewCellStyle7;
            RDPrice.HeaderText = "Price";
            RDPrice.Name = "RDPrice";
            // 
            // RDTotal
            // 
            RDTotal.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle8.Format = "c2";
            RDTotal.DefaultCellStyle = dataGridViewCellStyle8;
            RDTotal.HeaderText = "Total";
            RDTotal.Name = "RDTotal";
            // 
            // dgReceiptPayments
            // 
            dgReceiptPayments.AllowUserToAddRows = false;
            dgReceiptPayments.BackgroundColor = SystemColors.ButtonFace;
            dgReceiptPayments.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgReceiptPayments.Columns.AddRange(new DataGridViewColumn[] { RPCount, RPType, RPAmount });
            dgReceiptPayments.Location = new Point(808, 417);
            dgReceiptPayments.Name = "dgReceiptPayments";
            dgReceiptPayments.RowHeadersVisible = false;
            dgReceiptPayments.RowTemplate.Height = 25;
            dgReceiptPayments.Size = new Size(541, 350);
            dgReceiptPayments.TabIndex = 2;
            // 
            // RPCount
            // 
            RPCount.HeaderText = "#";
            RPCount.Name = "RPCount";
            // 
            // RPType
            // 
            RPType.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            RPType.HeaderText = "Type";
            RPType.Name = "RPType";
            // 
            // RPAmount
            // 
            RPAmount.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle9.Format = "c2";
            RPAmount.DefaultCellStyle = dataGridViewCellStyle9;
            RPAmount.HeaderText = "Amount";
            RPAmount.Name = "RPAmount";
            // 
            // Count
            // 
            Count.HeaderText = "#";
            Count.Name = "Count";
            Count.Width = 50;
            // 
            // RId
            // 
            RId.HeaderText = "Id";
            RId.Name = "RId";
            RId.Visible = false;
            // 
            // ReceiptNumber
            // 
            ReceiptNumber.AutoSizeMode = DataGridViewAutoSizeColumnMode.None;
            ReceiptNumber.HeaderText = "ReceiptNumber";
            ReceiptNumber.Name = "ReceiptNumber";
            ReceiptNumber.Width = 400;
            // 
            // Date
            // 
            Date.AutoSizeMode = DataGridViewAutoSizeColumnMode.None;
            dataGridViewCellStyle1.Format = "F";
            dataGridViewCellStyle1.NullValue = null;
            Date.DefaultCellStyle = dataGridViewCellStyle1;
            Date.HeaderText = "Date";
            Date.Name = "Date";
            Date.Width = 400;
            // 
            // Total
            // 
            Total.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle2.Format = "c2";
            dataGridViewCellStyle2.NullValue = null;
            Total.DefaultCellStyle = dataGridViewCellStyle2;
            Total.HeaderText = "Total";
            Total.Name = "Total";
            // 
            // Payment
            // 
            Payment.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle3.Format = "c2";
            Payment.DefaultCellStyle = dataGridViewCellStyle3;
            Payment.HeaderText = "Payment";
            Payment.Name = "Payment";
            // 
            // Remaining
            // 
            Remaining.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle4.Format = "c2";
            Remaining.DefaultCellStyle = dataGridViewCellStyle4;
            Remaining.HeaderText = "Remaining";
            Remaining.Name = "Remaining";
            // 
            // BtnPrint
            // 
            BtnPrint.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle5.Alignment = DataGridViewContentAlignment.MiddleCenter;
            dataGridViewCellStyle5.NullValue = "Print";
            BtnPrint.DefaultCellStyle = dataGridViewCellStyle5;
            BtnPrint.HeaderText = "Operations";
            BtnPrint.Name = "BtnPrint";
            BtnPrint.Resizable = DataGridViewTriState.True;
            BtnPrint.SortMode = DataGridViewColumnSortMode.Automatic;
            // 
            // Form6
            // 
            AutoScaleDimensions = new SizeF(12F, 23F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1371, 779);
            Controls.Add(dgReceiptPayments);
            Controls.Add(dgReceiptDetails);
            Controls.Add(dgReceipts);
            Font = new Font("Times New Roman", 15.75F, FontStyle.Regular, GraphicsUnit.Point);
            Margin = new Padding(5);
            Name = "Form6";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form6";
            Load += Form6_Load;
            ((System.ComponentModel.ISupportInitialize)dgReceipts).EndInit();
            ((System.ComponentModel.ISupportInitialize)dgReceiptDetails).EndInit();
            ((System.ComponentModel.ISupportInitialize)dgReceiptPayments).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dgReceipts;
        private DataGridView dgReceiptDetails;
        private DataGridView dgReceiptPayments;
        private DataGridViewTextBoxColumn RDCount;
        private DataGridViewTextBoxColumn RDProductName;
        private DataGridViewTextBoxColumn RDQuantity;
        private DataGridViewTextBoxColumn RDPrice;
        private DataGridViewTextBoxColumn RDTotal;
        private DataGridViewTextBoxColumn RPCount;
        private DataGridViewTextBoxColumn RPType;
        private DataGridViewTextBoxColumn RPAmount;
        private DataGridViewTextBoxColumn Count;
        private DataGridViewTextBoxColumn RId;
        private DataGridViewTextBoxColumn ReceiptNumber;
        private DataGridViewTextBoxColumn Date;
        private DataGridViewTextBoxColumn Total;
        private DataGridViewTextBoxColumn Payment;
        private DataGridViewTextBoxColumn Remaining;
        private DataGridViewButtonColumn BtnPrint;
    }
}