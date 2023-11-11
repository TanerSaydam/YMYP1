namespace FirstDesktopApp
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            cbProfession = new ComboBox();
            btnSave = new Button();
            SuspendLayout();
            // 
            // cbProfession
            // 
            cbProfession.AutoCompleteSource = AutoCompleteSource.ListItems;
            cbProfession.DropDownStyle = ComboBoxStyle.DropDownList;
            cbProfession.Font = new Font("Segoe UI", 15.75F, FontStyle.Regular, GraphicsUnit.Point);
            cbProfession.FormattingEnabled = true;
            cbProfession.Items.AddRange(new object[] { "Öğrenci", "Öğretmen", "Veli", "Müdür", "Müdür Yard." });
            cbProfession.Location = new Point(60, 47);
            cbProfession.Name = "cbProfession";
            cbProfession.Size = new Size(261, 38);
            cbProfession.TabIndex = 0;
            cbProfession.TabStop = false;
            // 
            // btnSave
            // 
            btnSave.Location = new Point(65, 104);
            btnSave.Name = "btnSave";
            btnSave.Size = new Size(256, 47);
            btnSave.TabIndex = 1;
            btnSave.Text = "Kaydet";
            btnSave.UseVisualStyleBackColor = true;
            btnSave.Click += btnSave_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(12F, 30F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(783, 469);
            Controls.Add(btnSave);
            Controls.Add(cbProfession);
            Font = new Font("Segoe UI", 15.75F, FontStyle.Regular, GraphicsUnit.Point);
            Margin = new Padding(5, 6, 5, 6);
            Name = "Form1";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form1";
            ResumeLayout(false);
        }

        #endregion

        private ComboBox cbProfession;
        private Button btnSave;
    }
}