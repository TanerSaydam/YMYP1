import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-grid',
  standalone: true,
  imports: [],
  templateUrl: './generic-grid.component.html',
  styleUrl: './generic-grid.component.css'
})
export class GenericGridComponent {
  @Input() data : any = [];
  @Input() columns: {field: string, title: string, value:any, filter: boolean}[] = []

  change(event:any, field: string){
    const data = {field: field, value: event.target.value} ;

    console.log(data);    
  }
}
