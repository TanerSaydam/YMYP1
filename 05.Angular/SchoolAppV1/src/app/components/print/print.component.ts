import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationRequestModel } from '../../models/pagination-request.model';
import { HttpService } from '../../services/http.service';
import { PaginationResponseModel } from '../../models/pagination-response.model';
import { StudentModel } from '../../models/student.model';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {
  request = new PaginationRequestModel();
  response:PaginationResponseModel<StudentModel[]> = new PaginationResponseModel<StudentModel[]>();;

constructor(private activated: ActivatedRoute, private http: HttpService){
  this.activated.params.subscribe((res)=> {
    this.request.id = res["value"];
    this.getAllStudentsByClassRoomId();    
  });
}


getAllStudentsByClassRoomId() {
  this.response.datas = [];    
  
  this.http.post("Students/GetAllByClassRoomId", this.request, res => {
  
    this.response = res;

    if(this.response.datas != null){
      this.response.datas = this.response.datas!.map((val:any, index:number)=> {
        const indetityNumberPart1 = val.identityNumber.substring(0,2);
        const indetityNumberPart2 = val.identityNumber.substring(val.identityNumber.length -6,3);

        const newHashedIdentityNumber = indetityNumberPart1 + "******" +indetityNumberPart2;

        val.identityNumber = newHashedIdentityNumber;
        val.index = index + 1;
        return val;
      });

      window.print();
    }

    
  });
}
}
