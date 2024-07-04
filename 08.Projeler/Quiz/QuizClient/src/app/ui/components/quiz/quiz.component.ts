import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export default class QuizComponent {
  roomNumber = signal<number>(0);

  constructor(
    private activated: ActivatedRoute
  ){
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);
    })
  }
}
