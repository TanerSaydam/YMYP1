import { AfterViewInit, Component, EventEmitter, input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { ParticipantModel } from '../../../ui/models/participant.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent implements AfterViewInit {  
  participants = input<ParticipantModel[]>([]);
  isLastQuestion = input<boolean>(false);
  interval: any;
  time = signal<number>(5);
  url = input<string>("/");

  constructor(private router: Router){}

  @Output("showNewQuestionEvent") showNewQuestionEvent = new EventEmitter();    

  ngAfterViewInit(): void {
    this.interval = setInterval(()=> {
      this.time.update(prev => prev -1);
      if(this.time() === 0){
        clearInterval(this.interval);
        if(!this.isLastQuestion()){
          this.showNewQuestionEvent.emit();
        }
      }
    },1000)  
  }

}
