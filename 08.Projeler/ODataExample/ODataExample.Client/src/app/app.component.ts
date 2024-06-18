import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridModule } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result: any = {data: [], total: 40};
  pageSize: number = 10;
  skip: number = 0;

  constructor(
    private http: HttpClient
  ){
    this.getAll();
  }

  getAll(){
    let endPoint = `https://localhost:7120/api/personels/getall`;
    endPoint += `?$top=${this.pageSize}&$skip=${this.skip}`
    this.http.get(endPoint).subscribe((res:any)=> {
      this.result.data = res;
    })
  }
}
