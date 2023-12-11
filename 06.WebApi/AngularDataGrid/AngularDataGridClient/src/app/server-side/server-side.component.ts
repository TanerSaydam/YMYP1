import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { GridReadyEvent, IServerSideDatasource, IServerSideGetRowsRequest } from 'ag-grid-community/dist/lib/main';
import { ColDef, GridOptions, IDatasource, IGetRowsParams, RowModelType } from 'ag-grid-enterprise';

@Component({
  selector: 'app-server-side',
  standalone: true,
  imports: [AgGridModule],
  template:`
  <ag-grid-angular
    style="width: 100%; height: 500px;"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [rowModelType]="rowModelType"
    [gridOptions]="gridOptions"
    [pagination]="true"
    [rowData]="rowData"
    [class]="themeClass"
    (gridReady)="onGridReady($event)"
  ></ag-grid-angular>
  `
})
export class ServerSideComponent {
  gridApi:any;
  public columnDefs: ColDef[] = [
    {
      headerName: "#",
      valueGetter: (params: any) => params.node.rowIndex + 1,
      width: 30      
    },
    { field: "name", filter: true },
    { field: "author" },
    {
      field: "publishDate",
      valueFormatter: (params: any) => {
        return new Date(params.value).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      },
    }    
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
  };
  public rowModelType: RowModelType = 'infinite';
  public rowData!: any[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20, // you can have your custom page size
    paginationPageSize: 20 //pagesize
  };
  
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.updateGridOptions({ datasource: this.dataSource })// replace dataSource with your datasource
  } 

  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {

      console.log(params);
      
      // Use startRow and endRow for sending pagination to Backend
      // params.startRow : Start Page
      // params.endRow : End Page

      //replace this.apiService with your Backend Call that returns an Observable
      this.apiService(params).subscribe((response:any) => {

        params.successCallback(
          response, 1000
        );

      })
    }
  }

  apiService(params:any) {
    let query = `https://localhost:7018/api/Values/GetAll`;

  // Sayfalama için OData parametreleri
  const skip = params.startRow;
  const top = params.endRow - params.startRow;
  query += `?skip=${skip}&top=${top}`;

  // Sıralama için OData parametreleri
  if (params.sortModel && params.sortModel.length > 0) {
    const sort = params.sortModel.map((s:any) => `${s.colId} ${s.sort}`).join(',');
    query += `&orderby=${sort}`;
  }

  // Filtreleme için OData parametreleri
  if (params.filterModel) {
    const filters = Object.keys(params.filterModel).map(key => {
      const filter = params.filterModel[key];
      // Basit bir filtre uygulaması; daha karmaşık senaryolar için genişletilebilir
      return `${key} eq '${filter.filter}'`;
    }).join(' and ');
    if (filters) {
      query += `&filter=${filters}`;
    }
  }

    return this.http.get(query)
  }
  
}
