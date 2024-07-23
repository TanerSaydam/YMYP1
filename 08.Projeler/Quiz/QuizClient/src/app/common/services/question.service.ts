import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionNumbers = signal<{roomNumber:number, questionNumber:number}[]>([]);  
  constructor() { }
}


