import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My Todo App</h1>
    <!-- Create Elements -->
    <div *ngIf="!isUpdateFormActive">
      <input #inputEl [(ngModel)]="work" type="text"> 
      <button (click)="save(inputEl)">Save</button>
    </div>
         <!-- Create Elements -->
    <br>
     <!-- Update Elements -->
     <div *ngIf="isUpdateFormActive">
      <input type="text" [(ngModel)]="updateWork">
      <button (click)="update()">Update</button>
      <button (click)="cancel()">Cancel</button>
     </div>
     <!-- Update Elements -->
    <hr>
    <ul>
      <li *ngFor="let t of todos let i = index">
        {{ t }}
        <button *ngIf="!isUpdateFormActive" (click)="get(i)">
          Update
        </button>
        <button *ngIf="!isUpdateFormActive" (click)="removeByIndex(i)">
          Remove
        </button>
      </li>
    </ul>` 
})
export class AppComponent {
  // @ViewChild("inputEl") element: ElementRef<HTMLInputElement> | undefined;
  work: string = "";
  updateWork: string = "";
  updateIndex: number = 0;
  isUpdateFormActive: boolean = false;
  todos: string[] = [];

  get(index:number){
    this.updateWork = this.todos[index];
    this.updateIndex = index;
    this.isUpdateFormActive = true;
  }

  cancel(){
    this.isUpdateFormActive = false;
  }

  update(){
    this.todos[this.updateIndex] =this.updateWork;
    this.isUpdateFormActive = false;
  }

  save(inputEl: HTMLInputElement){
    this.todos.push(this.work);
    this.work = "";
    inputEl.focus();
    //this.element?.nativeElement.focus()
  }

  removeByIndex(index:number){
    this.todos.splice(index,1);
  }

  
}
