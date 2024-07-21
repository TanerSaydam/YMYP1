import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../common/services/http.service';
import { QuizDetailModel } from '../../models/quiz-detail.model';
import { FlexiGridModule } from 'flexi-grid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexiToastService } from 'flexi-toast';
import { QuizModel } from '../../models/quiz.model';

@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [FlexiGridModule, CommonModule, FormsModule],
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export default class QuizDetailsComponent {
  quizId = signal<string>("");
  quizDetails = signal<QuizDetailModel[]>([]);
  updateQuizDetails = signal<QuizDetailModel[]>([]);
  showModal = signal<boolean>(false);
  quiz = signal<QuizModel>(new QuizModel());
  addModel = signal<QuizDetailModel>(new QuizDetailModel());

  constructor(
    private activated: ActivatedRoute,
    private http: HttpService,
    private toast: FlexiToastService
  ){
    this.activated.params.subscribe(res=> {
      this.quizId.set(res["id"]);
      this.getQuizById();
      this.addModel().quizId = this.quizId();
      this.getAll();
    });
  }

  getQuizById(){
    this.http.get<QuizModel>(`Quizzes/GetById?id=${this.quizId()}`,(res)=> {
      this.quiz.set(res);
    });
  }

  getAll(){
    this.http.get<QuizDetailModel[]>(`QuizDetails/GetAll?quizId=${this.quizId()}`,(res)=> {
      this.quizDetails.set(res);
      this.updateQuizDetails.set([]);
      for(let d of res){
        this.updateQuizDetails().push({...d});
      }
    });
  }

  create(){
    this.http.post<string>("QuizDetails/Create", this.addModel(),(res)=> {
      this.toast.showToast("Success",res);
      this.getAll();
      this.addModel.set(new QuizDetailModel());
      this.addModel().quizId = this.quizId();

      this.showModal.set(false);
    });
  }

  deleteById(id: string){
    this.toast.showSwal("Delete?","You want to delete this record?",()=> {
      this.http.get<string>(`QuizDetails/DeleteById?id=${id}`,(res)=> {
        this.toast.showToast("Info",res, "info");
        this.getAll();
      });
    })
  }

  get(item: QuizDetailModel){
    item.isUpdate = true;
  }

  cancelUpdate(item: QuizDetailModel){
    item.isUpdate = false;    
  }

  update(index:number){
    const data = this.updateQuizDetails()[index];
    this.http.post<string>("QuizDetails/Update",data, (res)=> {
      this.toast.showToast("Info", res, "info");
      this.quizDetails()[index] = {...data};
    });
  }

  changeQuizTitle(){
    this.http.post<string>(`Quizzes/ChangeTitle`, this.quiz(),(res)=> {
      this.toast.showToast("Info",res,"info");      
    });
  }
}
