import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendo-grid',
  standalone: true,
  imports: [GridModule],
  templateUrl: './kendo-grid.component.html',
  styleUrl: './kendo-grid.component.css'
})
export class KendoGridComponent {
  result: any = { data: [], total: 40 };
  pageSize: number = 10;
  skip: number = 0;
  filter: string = "";
  order: string = "";

  constructor(
    private http: HttpClient
  ) {
    this.getAll();
  }

  getAll() {
    let endPoint = `https://localhost:7120/api/personels/getall?count=true`;
    endPoint += `&$top=${this.pageSize}&$skip=${this.skip}`

    if (this.filter) {
      endPoint += `&${this.filter}`
    }

    if (this.order) {
      endPoint += `&${this.order}`
    }

    this.http.get(endPoint).subscribe((res: any) => {
      this.result.data = res.value;
      this.result.total = res["@odata.count"]
    })
  }

  pageChange(event: any) {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.getAll();
  }

  filterChange(event: any) {
    console.log(event);
    //filters.field //alan
    //filters.operator //operator
    //filters.value //value
    const f = event.filters[0];
    this.filter = `$filter=${f.operator}(${f.field}, '${f.value}')`
    this.getAll();
  }

  sortChange(event: any) {
    const d = event[0]

    const field = this.toTitleCase(d.field);

    console.log(d);
    
    if (d.dir === "asc") {
      this.order = `$orderby=${field}`
    } else {
      this.order = `$orderby=${field} desc`
    }

    this.getAll();
  }

  toTitleCase(str:string) {
    return str
      //.toLowerCase() // Önce tüm harfleri küçük yapar
      .split(' ') // Dizeyi boşluklardan böler ve bir dizi oluşturur
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Her kelimenin ilk harfini büyük yapar
      .join(' '); // Dizi elemanlarını tekrar birleştirir
  }
}
