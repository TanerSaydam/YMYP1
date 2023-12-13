import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { CreateComponent } from '../create/create.component';
import { DialogModule } from 'primeng/dialog';
import { TicketModel } from '../../models/ticket.model';
import { HttpService } from '../../services/http.service';
import { AgGridModule } from 'ag-grid-angular';
import { BadgeModule } from 'primeng/badge';
import { ButtonRendererComponent } from '../../common/components/button.renderer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, BreadcrumbModule, TableModule, TagModule, InputTextModule, ButtonModule, DynamicDialogModule, DialogModule, AgGridModule,BadgeModule],
    providers: [DialogService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
    frameworkComponents: any;
    tickets: TicketModel[] = [];
    ref: DynamicDialogRef | undefined;
    selectedSubject!: any;
    isAdmin: boolean = false;

    defaultColDef: any = {
        filter: true,
        floatingFilter: true,
        resizable: true
      }
    
      autoSizeStrategy: any = {
        type: 'fitGridWidth',
        defaultWidth: 100
      };

    colDefs: any[] = [
        {
            headerName: "Detay", 
            width: '40px',
            filter: false,
            cellRenderer: "buttonRenderer",
            cellRendererParams: {
                onClick: this.gotoDetail.bind(this),
                label: 'Goto Detail'
            }
        },
        {
            field: "userName"
        },
        { 
            field: "subject"
         },
        { 
            field: "createdDate",
            valueFormatter: (params: any) => {
                return new Date(params.value).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
            }, },
        { 
            field: "isOpen",            
            cellRenderer: (params: any) => {
                if (params.value) {
                return `
                <span class="p-badge p-component p-badge-lg p-badge-success">Açık</span>`;;
                } else {
                return `
                <span class="p-badge p-component p-badge-lg p-badge-danger">Kapalı</span>`;
                }
            } 
        }
      ];

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService,
        private http: HttpService,
        private router: Router,
        private auth: AuthService) {
            this.frameworkComponents = {
                buttonRenderer: ButtonRendererComponent
              }
        }

    ngOnInit(): void {
        this.getAll();
    }

    gotoDetail(event: any){
        const id = event.rowData.id;
        this.router.navigateByUrl("/ticket-details/" + id)
    }

    getAll() {
        const data = {
            roles: this.auth.token.roles
        };

        this.http.post("Tickets/GetAll",data,(res)=> {
            this.tickets = [];

            for(let r of res){
                const ticket: TicketModel = new TicketModel();
                ticket.id = r.id;
                ticket.subject = r.subject;
                ticket.isOpen = r.isOpen;
                ticket.userName = r.userName;
                ticket.createdDate = r.createdDate;
                this.tickets.push(ticket)
            }

            this.isAdmin = this.auth.token.roles.includes("Admin");
        });
    }

    show() {
        this.ref = this.dialogService.open(CreateComponent, {
            header: 'Yeni Destek Oluştur',
            width: '30%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: false,
        });

        this.ref.onClose.subscribe((data: any) => {
            
            if (data) {
                this.http.post("Tickets/Add", data, (res)=> {
                    this.getAll();
                    this.messageService.add({ severity: 'success', summary: 'Destek talebi başarıyla açıldı', detail: '' });
                })
                
            }
        });

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}
