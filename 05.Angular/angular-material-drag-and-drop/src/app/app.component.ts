import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: TodoModel[] = []

  todo: TodoModel[] = [];
  done: TodoModel[] = [];

  constructor(
    private http: HttpClient
  ){
    this.getAll();
  }

  getAll(){
    this.http.get<TodoModel[]>("https://localhost:7165/api/Todos/GetAll")
    .subscribe(res=>{
      this.todos = res;
      this.splitTodosToTodoAndDone();
    })
  }

  splitTodosToTodoAndDone(){
    this.todo = [];
    this.done = [];
    for(let t of this.todos){
      if(t.isCompleted) this.done.push(t);
      else this.todo.push(t);
    }
  }

  changeCompleted(id: number){
    this.http.get<TodoModel[]>(`https://localhost:7165/api/Todos/ChangeCompleted/${id}`)
    .subscribe(res=>{
      this.todos = res;
      this.splitTodosToTodoAndDone();
    })
  }

  drop1(event: CdkDragDrop<TodoModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const id = this.done[event.previousIndex].id;      
      this.changeCompleted(id);
    }
  }  

  drop2(event: CdkDragDrop<TodoModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const id = this.todo[event.previousIndex].id;
      this.changeCompleted(id);
    }
  }  
}

export class TodoModel{
  id: number = 0;
  work: string = "";
  isCompleted: boolean = false;
}
