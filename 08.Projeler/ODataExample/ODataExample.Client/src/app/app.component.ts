import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridModule } from "@progress/kendo-angular-grid";
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { GenericGridComponent } from './generic-grid/generic-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KendoGridComponent, AgGridComponent, GenericGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = [
    {
      firstName:"Taner",
      lastName: "Saydam"
    },
    {
      firstName:"Toprak",
      lastName: "Saydam"
    }
  ]

  columns:{field: string, title: string,value: any, filter: boolean}[] = [
    {
      field: "firstName",
      title: "First Name",
      value: "",
      filter: true
    },
    {
      field: "lastName",
      title: "LastName",
      value: "",
      filter: true
    },
    {
      field: "",
      title: "Age",
      value: 10,
      filter: false
    }
  ]
}
