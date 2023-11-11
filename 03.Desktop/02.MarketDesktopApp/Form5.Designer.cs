namespace _02.MarketDesktopApp
{
    partial class Form5
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
            Total = new DataGridViewTextBoxColumn();
            dgPayment = new DataGridView();
            Type = new DataGridViewTextBoxColumn();
            groupBox6 = new GroupBox();
            btnComplete = new Button();
            btnReset = new Button();
            lbRemaing = new Label();
            groupBox5 = new GroupBox();
            btnCash = new Button();
            btnKK = new Button();
            txtPayment = new TextBox();
            gbPayment = new GroupBox();
            groupBox3 = new GroupBox();
            lbTotal = new Label();
            TotalPrice = new DataGridViewTextBoxColumn();
            Price = new DataGridViewTextBoxColumn();
            Quantity = new DataGridViewTextBoxColumn();
            ProductName = new DataGridViewTextBoxColumn();
            Count = new DataGridViewTextBoxColumn();
            dgList = new DataGridView();
            groupBox2 = new GroupBox();
            txtBarcode = new TextBox();
            groupBox1 = new GroupBox();
            menuStrip1 = new MenuStrip();
            raporlarToolStripMenuItem = new ToolStripMenuItem();
            receiptsToolStripMenuItem = new ToolStripMenuItem();
            productsToolStripMenuItem = new ToolStripMenuItem();
            addProductToolStripMenuItem = new ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)dgPayment).BeginInit();
            groupBox6.SuspendLayout();
            groupBox5.SuspendLayout();
            gbPayment.SuspendLayout();
            groupBox3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dgList).BeginInit();
            groupBox2.SuspendLayout();
            groupBox1.SuspendLayout();
            menuStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // Total
            // 
            Total.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            Total.HeaderText = "Total";
            Total.Name = "Total";
            // 
            // dgPayment
            // 
            dgPayment.AllowUserToAddRows = false;
            dgPayment.BackgroundColor = SystemColors.ButtonFace;
            dgPayment.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgPayment.Columns.AddRange(new DataGridViewColumn[] { Type, Total });
            dgPayment.Location = new Point(6, 21);
            dgPayment.Name = "dgPayment";
            dgPayment.RowHeadersVisible = false;
            dgPayment.RowTemplate.Height = 25;
            dgPayment.Size = new Size(477, 157);
            dgPayment.TabIndex = 1;
            // 
            // Type
            // 
            Type.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            Type.HeaderText = "Type";
            Type.Name = "Type";
            // 
            // groupBox6
            // 
            groupBox6.Controls.Add(dgPayment);
            groupBox6.Location = new Point(865, 399);
            groupBox6.Name = "groupBox6";
            groupBox6.Size = new Size(489, 141);
            groupBox6.TabIndex = 11;
            groupBox6.TabStop = false;
            // 
            // btnComplete
            // 
            btnComplete.Font = new Font("Times New Roman", 36F, FontStyle.Regular, GraphicsUnit.Point);
            btnComplete.Image = Properties.Resources.complete;
            btnComplete.Location = new Point(250, 121);
            btnComplete.Name = "btnComplete";
            btnComplete.Size = new Size(238, 90);
            btnComplete.TabIndex = 4;
            btnComplete.UseVisualStyleBackColor = true;
            btnComplete.Click += btnComplete_Click;
            // 
            // btnReset
            // 
            btnReset.Font = new Font("Times New Roman", 36F, FontStyle.Regular, GraphicsUnit.Point);
            btnReset.ForeColor = Color.Brown;
            btnReset.Image = Properties.Resources.reset;
            btnReset.Location = new Point(6, 121);
            btnReset.Name = "btnReset";
            btnReset.Size = new Size(238, 90);
            btnReset.TabIndex = 3;
            btnReset.UseVisualStyleBackColor = true;
            btnReset.Click += btnReset_Click;
            // 
            // lbRemaing
            // 
            lbRemaing.Font = new Font("Times New Roman", 48F, FontStyle.Bold, GraphicsUnit.Point);
            lbRemaing.ForeColor = Color.Brown;
            lbRemaing.Location = new Point(8, 28);
            lbRemaing.Name = "lbRemaing";
            lbRemaing.Size = new Size(477, 90);
            lbRemaing.TabIndex = 1;
            lbRemaing.Text = "0,00 ₺";
            lbRemaing.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // groupBox5
            // 
            groupBox5.Controls.Add(btnComplete);
            groupBox5.Controls.Add(btnReset);
            groupBox5.Controls.Add(lbRemaing);
            groupBox5.Location = new Point(863, 546);
            groupBox5.Name = "groupBox5";
            groupBox5.Size = new Size(491, 222);
            groupBox5.TabIndex = 10;
            groupBox5.TabStop = false;
            // 
            // btnCash
            // 
            btnCash.Font = new Font("Times New Roman", 36F, FontStyle.Regular, GraphicsUnit.Point);
            btnCash.Image = Properties.Resources.cash;
            btnCash.Location = new Point(247, 97);
            btnCash.Name = "btnCash";
            btnCash.Size = new Size(238, 88);
            btnCash.TabIndex = 2;
            btnCash.UseVisualStyleBackColor = true;
            btnCash.Click += btnCash_Click;
            // 
            // btnKK
            // 
            btnKK.Font = new Font("Times New Roman", 36F, FontStyle.Regular, GraphicsUnit.Point);
            btnKK.Image = Properties.Resources.creditcart;
            btnKK.Location = new Point(8, 97);
            btnKK.Name = "btnKK";
            btnKK.Size = new Size(238, 88);
            btnKK.TabIndex = 1;
            btnKK.UseVisualStyleBackColor = true;
            btnKK.Click += btnKK_Click;
            // 
            // txtPayment
            // 
            txtPayment.Font = new Font("Times New Roman", 36F, FontStyle.Regular, GraphicsUnit.Point);
            txtPayment.ForeColor = Color.Teal;
            txtPayment.Location = new Point(8, 28);
            txtPayment.Name = "txtPayment";
            txtPayment.Size = new Size(479, 63);
            txtPayment.TabIndex = 0;
            txtPayment.Text = "0";
            txtPayment.TextAlign = HorizontalAlignment.Center;
            // 
            // gbPayment
            // 
            gbPayment.Controls.Add(btnCash);
            gbPayment.Controls.Add(btnKK);
            gbPayment.Controls.Add(txtPayment);
            gbPayment.Location = new Point(865, 200);
            gbPayment.Name = "gbPayment";
            gbPayment.Size = new Size(491, 193);
            gbPayment.TabIndex = 9;
            gbPayment.TabStop = false;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(lbTotal);
            groupBox3.Location = new Point(865, 49);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(491, 121);
            groupBox3.TabIndex = 8;
            groupBox3.TabStop = false;
            // 
            // lbTotal
            // 
            lbTotal.Font = new Font("Times New Roman", 48F, FontStyle.Bold, GraphicsUnit.Point);
            lbTotal.ForeColor = Color.Brown;
            lbTotal.Location = new Point(8, 21);
            lbTotal.Name = "lbTotal";
            lbTotal.Size = new Size(477, 90);
            lbTotal.TabIndex = 0;
            lbTotal.Text = "0,00 ₺";
            lbTotal.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // TotalPrice
            // 
            TotalPrice.HeaderText = "Total Price";
            TotalPrice.Name = "TotalPrice";
            TotalPrice.Width = 150;
            // 
            // Price
            // 
            Price.HeaderText = "Price";
            Price.Name = "Price";
            // 
            // Quantity
            // 
            Quantity.HeaderText = "Quantity";
            Quantity.Name = "Quantity";
            // 
            // ProductName
            // 
            ProductName.HeaderText = "Name";
            ProductName.Name = "ProductName";
            ProductName.Width = 400;
            // 
            // Count
            // 
            Count.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            Count.HeaderText = "#";
            Count.Name = "Count";
            // 
            // dgList
            // 
            dgList.AllowUserToAddRows = false;
            dgList.BackgroundColor = SystemColors.ButtonFace;
            dgList.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgList.Columns.AddRange(new DataGridViewColumn[] { Count, ProductName, Quantity, Price, TotalPrice });
            dgList.Location = new Point(10, 19);
            dgList.Name = "dgList";
            dgList.RowHeadersVisible = false;
            dgList.RowTemplate.Height = 25;
            dgList.Size = new Size(804, 605);
            dgList.TabIndex = 0;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(dgList);
            groupBox2.Location = new Point(17, 182);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(826, 586);
            groupBox2.TabIndex = 7;
            groupBox2.TabStop = false;
            // 
            // txtBarcode
            // 
            txtBarcode.Font = new Font("Times New Roman", 54.75F, FontStyle.Regular, GraphicsUnit.Point);
            txtBarcode.Location = new Point(6, 20);
            txtBarcode.Name = "txtBarcode";
            txtBarcode.Size = new Size(808, 91);
            txtBarcode.TabIndex = 0;
            txtBarcode.KeyPress += txtBarcode_KeyPress;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(txtBarcode);
            groupBox1.Location = new Point(17, 49);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(826, 121);
            groupBox1.TabIndex = 6;
            groupBox1.TabStop = false;
            // 
            // menuStrip1
            // 
            menuStrip1.Items.AddRange(new ToolStripItem[] { raporlarToolStripMenuItem, productsToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Size = new Size(1371, 24);
            menuStrip1.TabIndex = 12;
            menuStrip1.Text = "menuStrip1";
            // 
            // raporlarToolStripMenuItem
            // 
            raporlarToolStripMenuItem.DropDownItems.AddRange(new ToolStripItem[] { receiptsToolStripMenuItem });
            raporlarToolStripMenuItem.Name = "raporlarToolStripMenuItem";
            raporlarToolStripMenuItem.Size = new Size(59, 20);
            raporlarToolStripMenuItem.Text = "Reports";
            // 
            // receiptsToolStripMenuItem
            // 
            receiptsToolStripMenuItem.Name = "receiptsToolStripMenuItem";
            receiptsToolStripMenuItem.Size = new Size(118, 22);
            receiptsToolStripMenuItem.Text = "Receipts";
            receiptsToolStripMenuItem.Click += receiptsToolStripMenuItem_Click;
            // 
            // productsToolStripMenuItem
            // 
            productsToolStripMenuItem.DropDownItems.AddRange(new ToolStripItem[] { addProductToolStripMenuItem });
            productsToolStripMenuItem.Name = "productsToolStripMenuItem";
            productsToolStripMenuItem.Size = new Size(66, 20);
            productsToolStripMenuItem.Text = "Products";
            // 
            // addProductToolStripMenuItem
            // 
            addProductToolStripMenuItem.Name = "addProductToolStripMenuItem";
            addProductToolStripMenuItem.Size = new Size(180, 22);
            addProductToolStripMenuItem.Text = "Products";
            addProductToolStripMenuItem.Click += addProductToolStripMenuItem_Click;
            // 
            // Form5
            // 
            AutoScaleDimensions = new SizeF(12F, 23F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1371, 779);
            Controls.Add(groupBox6);
            Controls.Add(groupBox5);
            Controls.Add(gbPayment);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            Controls.Add(menuStrip1);
            Font = new Font("Times New Roman", 15.75F, FontStyle.Regular, GraphicsUnit.Point);
            MainMenuStrip = menuStrip1;
            Margin = new Padding(5);
            Name = "Form5";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form5";
            Load += Form5_Load;
            ((System.ComponentModel.ISupportInitialize)dgPayment).EndInit();
            groupBox6.ResumeLayout(false);
            groupBox5.ResumeLayout(false);
            gbPayment.ResumeLayout(false);
            gbPayment.PerformLayout();
            groupBox3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)dgList).EndInit();
            groupBox2.ResumeLayout(false);
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private DataGridViewTextBoxColumn Total;
        private DataGridView dgPayment;
        private DataGridViewTextBoxColumn Type;
        private GroupBox groupBox6;
        private Button btnComplete;
        private Button btnReset;
        private Label lbRemaing;
        private GroupBox groupBox5;
        private Button btnCash;
        private Button btnKK;
        private TextBox txtPayment;
        private GroupBox gbPayment;
        private GroupBox groupBox3;
        private Label lbTotal;
        private DataGridViewTextBoxColumn TotalPrice;
        private DataGridViewTextBoxColumn Price;
        private DataGridViewTextBoxColumn Quantity;
        private DataGridViewTextBoxColumn ProductName;
        private DataGridViewTextBoxColumn Count;
        private DataGridView dgList;
        private GroupBox groupBox2;
        private TextBox txtBarcode;
        private GroupBox groupBox1;
        private MenuStrip menuStrip1;
        private ToolStripMenuItem raporlarToolStripMenuItem;
        private ToolStripMenuItem receiptsToolStripMenuItem;
        private ToolStripMenuItem productsToolStripMenuItem;
        private ToolStripMenuItem addProductToolStripMenuItem;
    }
}