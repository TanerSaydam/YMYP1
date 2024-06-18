import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.Default,
  template:`
    <button (click)="changeNumber()">Change number</button>
    <p>Number is: {{num}}</p>
  `
})
export class AppComponent {
  num = 0;

  changeNumber(){
    
    const random = Math.random();
    this.num = random * 100;
  }
}
