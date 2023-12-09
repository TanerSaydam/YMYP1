import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridModule, ICellRendererAngularComp } from 'ag-grid-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rowData: any = [];

  colDefs: any[] = [
    {
      headerName: "#",
      valueGetter: (params: any) => params.node.rowIndex + 1,
      width: 30,
      floatingFilter: false,
      sort: false
    },
    { field: "name" },
    { field: "author" },
    {
      field: "publishDate",
      valueFormatter: (params: any) => {
        return new Date(params.value).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      },
    }
  ];

  gridOptions: any = {
    overlayLoadingTemplate: 
      `<span class="ag-overlay-loading-center">Yükleniyor...</span>`,
    overlayNoRowsTemplate: 
      `<span style="padding: 10px;">No data available to display</span>`,
  };

  autoSizeStrategy: any = {
    type: 'fitGridWidth',
    defaultWidth: 100
  };

  defaultColDef: any = {
    editable: this.checkAuthorization(),
    filter: true,
    onCellValueChanged: (params:any)=> this.update(params),
    floatingFilter: true,
  }

  constructor(private http: HttpClient) { }

  onGridReady(params: any) {
    params.api.showLoadingOverlay();
    this.getAll(params);
  }

  checkAuthorization(){
    return true;
  }

  getAll(params:any = null){
    this.http.get("https://localhost:7018/api/Values/GetAll")
      .subscribe({
        next: (res:any)=> {
          this.rowData = res
        },
        error: (err:HttpErrorResponse)=> {
          params?.api?.showNoRowsOverlay();
        }
      });
  }

  update(params:any){
    console.log(params.data);
    this.http.post("https://localhost:7018/api/Values/Update", params.data)
    .subscribe(res=> {
      this.getAll();
    })
  }
}

