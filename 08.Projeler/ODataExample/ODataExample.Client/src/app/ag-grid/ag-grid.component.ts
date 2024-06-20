import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
  themeClass = "ag-theme-quartz"; 

  colDefs: ColDef<any>[] = [
    { field: "firstName" },
    { field: "lastName" }
  ];
  
  defaultColDef: ColDef = {
    flex: 1,
  }

  pageSize: number = 10;
  currentPage: number = 0;
  skip: number = 0;
  rowData = [];
  totalRecords: number = 0;

  constructor(
    private http: HttpClient
  ) {
    this.getAllData();
  }

  getAllData() {
    const skip = this.currentPage * this.pageSize;
    const endPoint = `https://localhost:7120/api/personels/getall?count=true&$top=${this.pageSize}&$skip=${skip}`;

    this.http.get<any>(endPoint).subscribe((res: any) => {
      this.rowData = res.value;
      this.totalRecords = res['@odata.count']; // Assuming total count is provided as '@odata.count'
    });
  }

  onPaginationChanged(event: any) {
    const newPage = event.api.paginationGetCurrentPage();
    this.currentPage = newPage;
    //this.getAllData();
  }
}
