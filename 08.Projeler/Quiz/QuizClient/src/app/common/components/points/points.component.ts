import { AfterViewInit, Component, EventEmitter, input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { ParticipantModel } from '../../../ui/models/participant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent implements AfterViewInit {  
  participants = input<ParticipantModel[]>([]);
  isLastQuestion = input<boolean>(false);
  interval: any;
  time = signal<number>(5);

  constructor(private router: Router){}

  @Output("showNewQuestionEvent") showNewQuestionEvent = new EventEmitter();  

  ngAfterViewInit(): void {
    this.interval = setInterval(()=> {
      this.time.update(prev => prev -1);
      if(this.time() === 0){
        clearInterval(this.interval);
        if(this.isLastQuestion()){
          document.location.reload();
        }else{
          this.showNewQuestionEvent.emit();
        }
      }
    },1000)  
  }

}
