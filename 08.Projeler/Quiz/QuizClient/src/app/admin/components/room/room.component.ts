import { Component, computed, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../common/services/http.service';
import { ParticipantModel } from '../../../ui/models/participant.model';
import { SignalrService } from '../../../common/services/signalr.service';
import { QuizPageComponent } from '../../../common/components/quiz-page/quiz-page.component';
import { PointsComponent } from '../../../common/components/points/points.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [QuizPageComponent, PointsComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export default class RoomComponent implements OnDestroy {
  roomNumber = signal<number>(0);
  participants = signal<ParticipantModel[]>([]);
  count = computed(()=> this.participants().length);
  time = signal<number>(-1);
  interval: any;  
  showPoint = signal<boolean>(false);
  isLastQuestion = signal<boolean>(false);

  constructor(
    private activated: ActivatedRoute,
    private http: HttpService,
    private signalr: SignalrService,
    private router: Router
  ){     
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);  
      this.roomNumber.set(this.roomNumber());
      this.signalr.startConnection().then(()=> {
        this.signalr.hubConnection!.invoke("JoinQuizRoomAsync",this.roomNumber().toString());      

        this.signalr.hubConnection!.on("JoinQuizRoom",(res)=> {
          const participant = this.participants().find(p=> p.email == res.email)
          if(!participant){
            this.participants.update(prev => [...prev, res]);            
          }
          this.signalr.hubConnection!.invoke("SetTimeByRoomNumber", this.roomNumber());
        });
    
        this.signalr.hubConnection!.on("LeaveQuizRoom",(res)=> {          
          const newParticipants = this.participants().filter(p=> p.email !== res);
          this.participants.set([...newParticipants]);
          
          if(this.participants().length === 0){
            location.reload();            
          }
        });
    
        this.signalr.hubConnection!.on("GetParticipantInformation", (res:ParticipantModel)=> {
          const par:ParticipantModel = this.participants().find(p=> p.email == res.email)!;
          par.point = res.point;

          this.participants().sort((a, b) => b.point - a.point);
        });

        this.signalr.hubConnection!.on("Time", (res)=> {          
          this.time.set(res);
          clearInterval(this.interval);
          this.interval = setInterval(()=> {
            this.time.update(prev => prev - 1);
            if(this.time() === 0){
              clearInterval(this.interval);              
              this.signalr.hubConnection!.invoke("SetQuestionTime",this.roomNumber(), '10');
            }
          },1000);
        })
      });
      this.getParticipants();
      this.changeQuizIsStart();
    });
  }

  ngOnDestroy(): void {
    this.signalr.hubConnection!.invoke("leaveQuizRoomAsync",this.roomNumber().toString());
  }

  getParticipants(){
    this.http.get<ParticipantModel[]>(`Quizzes/GetParticipantsByRoomNumber?roomNumber=${this.roomNumber()}`,(res)=> {
      this.participants.set(res);
    });
  }

  changeQuizIsStart(){
    this.http.get<string>(`Quizzes/ChangeIsStart?roomNumber=${this.roomNumber()}`,(res)=> {});
  }

  showNewQuestion(){
    this.showPoint.set(false);
    this.signalr.hubConnection!.invoke("SetQuestionTime",this.roomNumber(), '3');
  }

  onEndOfTheQuestionTime(istLastQuestion: boolean){
    this.showPoint.set(true);
    this.isLastQuestion.set(istLastQuestion);
  }
}
