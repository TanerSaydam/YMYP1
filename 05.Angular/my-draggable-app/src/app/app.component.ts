import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDrag, CdkDropList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-draggable-app';
  onDrag(event:any){
    console.log(event);
    
  }
}
