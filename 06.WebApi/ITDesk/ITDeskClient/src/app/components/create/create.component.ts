import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,InputTextModule, FormsModule,FileUploadModule,ToastModule,InputTextareaModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
subject: string = ""
summary: string = "";

uploadedFiles: any[] = [];

    constructor(private messageService: MessageService,private dialog: DynamicDialogRef,) {}

    onUpload(event:any) {      
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    create(){
      if(this.subject === ""){
        this.messageService.add({ severity: 'error', summary: 'Konu alanı boş olamaz', detail: '' });
        return;
      }

      if(this.summary === ""){
        this.messageService.add({ severity: 'error', summary: 'Özet alanı boş olamaz', detail: '' });
        return;
      }

      const formData = new FormData();
      formData.append("subject", this.subject);
      formData.append("summary", this.summary);
      for(let file of this.uploadedFiles){
        formData.append("files", file, file.name);
      }

      this.dialog.close(formData);
    }
}
