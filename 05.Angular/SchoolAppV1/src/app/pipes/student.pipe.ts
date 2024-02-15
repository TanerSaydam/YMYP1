import { Pipe, PipeTransform } from '@angular/core';
import { StudentModel } from '../models/student.model';

@Pipe({
  name: 'student',
  standalone: true
})
export class StudentPipe implements PipeTransform {

  transform(value: StudentModel[], search: string): StudentModel[] {
    if(search === ""){
      return value;
    }

    return value.filter(p=> 
      p.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
      p.identityNumber.includes(search) ||
      p.studentNumber.toString().includes(search)
    );    
  }

}
