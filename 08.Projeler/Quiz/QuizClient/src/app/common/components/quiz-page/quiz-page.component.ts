import { AfterViewInit, Component, ElementRef, EventEmitter, input, Input, Output, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SignalrService } from '../../services/signalr.service';
import { QuizDetailModel } from '../../../admin/models/quiz-detail.model';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../services/question.service';

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
  questionTitle = signal<string>("");
  showQuestion = signal<boolean>(false);
  question = signal<QuizDetailModel>(new QuizDetailModel());
  time = signal<number>(-1);
  interval: any;
  answer = signal<string>("");
  questionNumber: any;
  result = signal<string>("");

  @Output("endOfTheQuestionTimeEvent") endOfTheQuestionTimeEvent = new EventEmitter<boolean>();

  @ViewChild("answerAEl") answerAEl: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("answerBEl") answerBEl: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("answerCEl") answerCEl: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("answerDEl") answerDEl: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("resultEl") resultEl: ElementRef<HTMLHeadingElement> | undefined;

  constructor(
    private http: HttpService,
    private signalr: SignalrService,
    private _question: QuestionService
  ) { }

  ngAfterViewInit(): void {
    this.getQuestionTitle();
  }

  getQuestionTitle() {
    this.questionNumber = this._question.questionNumbers().find(p => p.roomNumber === this.roomNumber());
    if (this.questionNumber) {
      this.questionNumber.questionNumber++;
    } else {
      this.questionNumber = { roomNumber: this.roomNumber(), questionNumber: 0 };
      this._question.questionNumbers.update(prev => [...prev, this.questionNumber!]);
    }
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber.questionNumber
    }

    this.http.post<string>(`QuizPages/GetQuestionTitle`, data, (res) => {
      this.questionTitle.set(res);

      this.signalr.hubConnection!.on("QuestionTime", (res) => {
        this.time.set(res);
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.time.update(prev => prev - 1);
          if (this.time() === 0) {
            clearInterval(this.interval);
            if (this.question().title === "") {
              this.getQuestion();
            } else {
              this.endOfTheQuestionTimeEvent.emit(this.question().isLastQuestion);
            }
          }
        }, 1000);
      });
    });
  }

  getQuestion() {
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber.questionNumber
    }
    this.http.post<QuizDetailModel>(`QuizPages/GetQuizDetailByRoomNumberAndQuestioNumber`, data, (res) => {
      this.question.set(res);
      this.showQuestion.set(true);
      this.time.set(-1);      
      this.signalr.hubConnection!.invoke("SetQuestionTime", this.roomNumber(), res.timeOut.toString());
    });
  }

  answerQuestion(answer: string) {
    this.answer.set(answer);
    const data = {
      roomNumber: this.roomNumber(),
      questionNumber: this.questionNumber.questionNumber,
      email: this.email(),
      answer: answer,
      time: this.time()
    };

    this.http.post<boolean>(`QuizPages/AnswerQuestion`, data, res => {
      const className =`answer-btn ${res === true ? 'correct' : 'not-correct'}`;
      if(res){
        this.result.set("Doğru! Tebrikler...");
        this.resultEl!.nativeElement.className = "my-alert alert-success";
      }else{
        this.result.set("Üzgünüm! Yanlış cevap");
        this.resultEl!.nativeElement.className = "my-alert alert-danger";
      }
      switch (this.answer()) {
        case "A":
          this.answerAEl!.nativeElement.className = className
          break;

        case "B":
          this.answerBEl!.nativeElement.className = className
          break;

        case "C":
          this.answerCEl!.nativeElement.className = className
          break;

        case "D":
          this.answerDEl!.nativeElement.className = className
          break;
      }
    });
  }
}
