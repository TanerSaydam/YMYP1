namespace _02.MarketDesktopApp
{
    partial class Form7
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
            DataGridViewCellStyle dataGridViewCellStyle1 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle2 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle3 = new DataGridViewCellStyle();
            tabControl1 = new TabControl();
            tabPage1 = new TabPage();
            dgProducts = new DataGridView();
            tabPage2 = new TabPage();
            btnSave = new Button();
            txtPrice = new TextBox();
            label2 = new Label();
            txtName = new TextBox();
            label1 = new Label();
            Count = new DataGridViewTextBoxColumn();
            PId = new DataGridViewTextBoxColumn();
            PName = new DataGridViewTextBoxColumn();
            Price = new DataGridViewTextBoxColumn();
            BtnEdit = new DataGridViewButtonColumn();
            BtnRemove = new DataGridViewButtonColumn();
            tabControl1.SuspendLayout();
            tabPage1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dgProducts).BeginInit();
            tabPage2.SuspendLayout();
            SuspendLayout();
            // 
            // tabControl1
            // 
            tabControl1.Controls.Add(tabPage1);
            tabControl1.Controls.Add(tabPage2);
            tabControl1.Dock = DockStyle.Fill;
            tabControl1.Location = new Point(0, 0);
            tabControl1.Name = "tabControl1";
            tabControl1.SelectedIndex = 0;
            tabControl1.Size = new Size(766, 713);
            tabControl1.TabIndex = 0;
            tabControl1.SelectedIndexChanged += tabControl1_SelectedIndexChanged;
            // 
            // tabPage1
            // 
            tabPage1.Controls.Add(dgProducts);
            tabPage1.Location = new Point(4, 32);
            tabPage1.Name = "tabPage1";
            tabPage1.Padding = new Padding(3);
            tabPage1.Size = new Size(758, 677);
            tabPage1.TabIndex = 0;
            tabPage1.Text = "Products";
            tabPage1.UseVisualStyleBackColor = true;
            // 
            // dgProducts
            // 
            dgProducts.AllowUserToAddRows = false;
            dgProducts.AllowUserToResizeRows = false;
            dgProducts.BackgroundColor = SystemColors.Control;
            dgProducts.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgProducts.Columns.AddRange(new DataGridViewColumn[] { Count, PId, PName, Price, BtnEdit, BtnRemove });
            dgProducts.Dock = DockStyle.Fill;
            dgProducts.EditMode = DataGridViewEditMode.EditProgrammatically;
            dgProducts.Location = new Point(3, 3);
            dgProducts.Name = "dgProducts";
            dgProducts.RowHeadersVisible = false;
            dgProducts.RowTemplate.Height = 25;
            dgProducts.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dgProducts.Size = new Size(752, 671);
            dgProducts.TabIndex = 0;
            dgProducts.CellClick += dgProducts_CellClick;
            // 
            // tabPage2
            // 
            tabPage2.Controls.Add(btnSave);
            tabPage2.Controls.Add(txtPrice);
            tabPage2.Controls.Add(label2);
            tabPage2.Controls.Add(txtName);
            tabPage2.Controls.Add(label1);
            tabPage2.Location = new Point(4, 24);
            tabPage2.Name = "tabPage2";
            tabPage2.Padding = new Padding(3);
            tabPage2.Size = new Size(758, 685);
            tabPage2.TabIndex = 1;
            tabPage2.Text = "Product Add";
            tabPage2.UseVisualStyleBackColor = true;
            // 
            // btnSave
            // 
            btnSave.Location = new Point(216, 210);
            btnSave.Name = "btnSave";
            btnSave.Size = new Size(283, 42);
            btnSave.TabIndex = 4;
            btnSave.Text = "Save";
            btnSave.UseVisualStyleBackColor = true;
            btnSave.Click += btnSave_Click;
            // 
            // txtPrice
            // 
            txtPrice.Location = new Point(215, 145);
            txtPrice.Name = "txtPrice";
            txtPrice.Size = new Size(284, 32);
            txtPrice.TabIndex = 3;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(314, 108);
            label2.Name = "label2";
            label2.Size = new Size(53, 23);
            label2.TabIndex = 2;
            label2.Text = "Price";
            // 
            // txtName
            // 
            txtName.Location = new Point(210, 53);
            txtName.Name = "txtName";
            txtName.Size = new Size(289, 32);
            txtName.TabIndex = 1;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(314, 17);
            label1.Name = "label1";
            label1.Size = new Size(59, 23);
            label1.TabIndex = 0;
            label1.Text = "Name";
            // 
            // Count
            // 
            Count.HeaderText = "#";
            Count.Name = "Count";
            // 
            // PId
            // 
            PId.HeaderText = "Id";
            PId.Name = "PId";
            PId.Visible = false;
            // 
            // PName
            // 
            PName.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            PName.HeaderText = "Name";
            PName.Name = "PName";
            // 
            // Price
            // 
            Price.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dataGridViewCellStyle1.Format = "c2";
            Price.DefaultCellStyle = dataGridViewCellStyle1;
            Price.HeaderText = "Price";
            Price.Name = "Price";
            // 
            // BtnEdit
            // 
            dataGridViewCellStyle2.Alignment = DataGridViewContentAlignment.MiddleCenter;
            dataGridViewCellStyle2.NullValue = "Edit";
            BtnEdit.DefaultCellStyle = dataGridViewCellStyle2;
            BtnEdit.HeaderText = "Operations";
            BtnEdit.Name = "BtnEdit";
            BtnEdit.Resizable = DataGridViewTriState.True;
            BtnEdit.SortMode = DataGridViewColumnSortMode.Automatic;
            // 
            // BtnRemove
            // 
            dataGridViewCellStyle3.Alignment = DataGridViewContentAlignment.MiddleCenter;
            dataGridViewCellStyle3.BackColor = Color.Maroon;
            dataGridViewCellStyle3.ForeColor = Color.White;
            dataGridViewCellStyle3.NullValue = "Remove";
            dataGridViewCellStyle3.SelectionBackColor = Color.Maroon;
            dataGridViewCellStyle3.SelectionForeColor = Color.White;
            BtnRemove.DefaultCellStyle = dataGridViewCellStyle3;
            BtnRemove.HeaderText = "Operations";
            BtnRemove.Name = "BtnRemove";
            // 
            // Form7
            // 
            AutoScaleDimensions = new SizeF(12F, 23F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(766, 713);
            Controls.Add(tabControl1);
            Font = new Font("Times New Roman", 15.75F, FontStyle.Regular, GraphicsUnit.Point);
            Margin = new Padding(5);
            Name = "Form7";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form7";
            FormClosing += Form7_FormClosing;
            Load += Form7_Load;
            tabControl1.ResumeLayout(false);
            tabPage1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)dgProducts).EndInit();
            tabPage2.ResumeLayout(false);
            tabPage2.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private TabControl tabControl1;
        private TabPage tabPage1;
        private DataGridView dgProducts;
        private TabPage tabPage2;
        private Button btnSave;
        private TextBox txtPrice;
        private Label label2;
        private TextBox txtName;
        private Label label1;
        private DataGridViewTextBoxColumn Count;
        private DataGridViewTextBoxColumn PId;
        private DataGridViewTextBoxColumn PName;
        private DataGridViewTextBoxColumn Price;
        private DataGridViewButtonColumn BtnEdit;
        private DataGridViewButtonColumn BtnRemove;
    }
}