import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SignalrService } from '../../../common/services/signalr.service';
import { QuizPageComponent } from '../../../common/components/quiz-page/quiz-page.component';
import { PointsComponent } from '../../../common/components/points/points.component';
import { HttpService } from '../../../common/services/http.service';
import { ParticipantModel } from '../../models/participant.model';
import { QuestionService } from '../../../common/services/question.service';
import { FlexiToastService } from 'flexi-toast';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterLink, QuizPageComponent, PointsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export default class QuizComponent implements OnDestroy {
  roomNumber = signal<number>(0);
  email = signal<string>("");
  time = signal<number>(-1);
  userName = signal<string>("");
  interval: any;
  showPoint = signal<boolean>(false);
  participants = signal<ParticipantModel[]>([]);
  isLastQuestion = signal<boolean>(false);

  constructor(
    private activated: ActivatedRoute,
    private http: HttpService,
    private signalr: SignalrService,
    private question: QuestionService,
    private toast: FlexiToastService,
    private router: Router
  ){
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);

      this.http.get<boolean>("QuizPages/IsQuizStart?roomNumber=" + this.roomNumber(),(response)=> {
        if(response){
          this.toast.showToast("Hata","Oda şu anda sınavda olduğu için bitene kadar giremezsiniz","error");
          this.router.navigateByUrl("/");
        }else{
          this.email.set(res["email"]);
          this.userName.set(res["userName"]);
          this.signalr.startConnection().then(()=> {
            this.signalr.hubConnection!.invoke("JoinQuizRoomByParticipant",this.roomNumber().toString(), this.email(), this.userName());
    
            this.signalr.hubConnection!.on("Time", res=> {
              this.time.set(res);
              clearInterval(this.interval);
              this.interval = setInterval(()=> {
                this.time.update(prev => prev - 1);
                if(this.time() === 0){
                  clearInterval(this.interval);              
                }
              },1000);
            })
          });
        }
      })      
    })
  }

  ngOnDestroy(): void {
    if(this.signalr.hubConnection !== null){
      this.signalr.hubConnection!.invoke("LeaveQuizRoomByParticipant",this.roomNumber().toString(), this.email());
      const questionNumber = this.question.questionNumbers().find(p=> p.roomNumber == this.roomNumber());
      if(questionNumber){
        questionNumber.questionNumber = -1;
      }
    }   
  }

  getParticipants(istLastQuestion: boolean){
    this.isLastQuestion.set(istLastQuestion);
      this.http.post<ParticipantModel[]>(`QuizPages/GetParticipants`,{roomNumber: this.roomNumber()}, res=> {
        this.showPoint.set(true);
        this.participants.set(res);

        this.participants().sort((a, b) => b.point - a.point);
      })
  }

  showNewQuestion(){
    this.showPoint.set(false);
  }
}
