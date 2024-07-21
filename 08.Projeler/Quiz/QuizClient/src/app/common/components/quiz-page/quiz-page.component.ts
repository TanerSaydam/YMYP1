import { AfterViewInit, Component, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SignalrService } from '../../services/signalr.service';
import { QuizDetailModel } from '../../../admin/models/quiz-detail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent implements AfterViewInit {
  roomNumber = input<number>(0);
  email = input<string>("");
  questionNumber = signal<number>(-1);
  questionTitle = signal<string>("");
  showQuestion = signal<boolean>(false);
  question = signal<QuizDetailModel>(new QuizDetailModel());
  time = signal<number>(-1);  
  interval: any;  
  answer = signal<string>("");

  @Output("endOfTheQuestionTimeEvent") endOfTheQuestionTimeEvent = new EventEmitter<boolean>();

  constructor(
    private http: HttpService,
    private signalr: SignalrService
  ){}

  ngAfterViewInit(): void {
    this.getQuestionTitle();
  }

  getQuestionTitle(){
    this.questionNumber.update(prev => prev + 1);
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber()
    }
    this.http.post<string>(`QuizPages/GetQuestionTitle`, data,(res)=> {
      this.questionTitle.set(res);

      this.signalr.hubConnection!.on("QuestionTime", (res)=> {
        this.time.set(res);
        clearInterval(this.interval);
          this.interval = setInterval(()=> {
            this.time.update(prev => prev - 1);
            if(this.time() === 0){
              clearInterval(this.interval);
              if(this.question().title === ""){
                this.getQuestion();
              }else{
                this.endOfTheQuestionTimeEvent.emit(true);
              }
            }
          },1000);
      });
    });
  }

  getQuestion(){
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber()
    }
    this.http.post<QuizDetailModel>(`QuizPages/GetQuizDetailByRoomNumberAndQuestioNumber`, data,(res)=> { 
      this.question.set(res);
      this.showQuestion.set(true);
      this.time.set(-1);
      this.signalr.hubConnection!.invoke("SetQuestionTime",this.roomNumber(),'6');
    });
  }

  answerQuestion(answer: string){
    this.answer.set(answer);
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber(),
      email: this.email(),
      answer: answer
    };

    this.http.post<string>(`QuizPages/AnswerQuestion`, data, res=> {

    });
  }
}
