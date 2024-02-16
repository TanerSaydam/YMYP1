import { AfterContentChecked, AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionId } from 'devexpress-reporting/dx-webdocumentviewer'
import { ClassRoomModel } from '../../models/class-room.model';
import { StudentModel } from '../../models/student.model';
import { HttpService } from '../../services/http.service';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentPipe } from '../../pipes/student.pipe';
import { FormValidateDirective } from 'form-validate-angular';
import { SwalService } from '../../services/swal.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DxDataGridModule } from 'devextreme-angular';
import { DxReportViewerComponent, DxReportViewerModule } from 'devexpress-reporting-angular';
import { PaginationRequestModel } from '../../models/pagination-request.model';
import { PaginationResponseModel } from '../../models/pagination-response.model';

declare const $:any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentPipe,FormValidateDirective, NgxPaginationModule, DxDataGridModule, DxReportViewerModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterContentInit {
  classRooms: ClassRoomModel[] = [];
  response: PaginationResponseModel<StudentModel[]> = new PaginationResponseModel<StudentModel[]>();

  request: PaginationRequestModel = new PaginationRequestModel();

  p:number = 1;

  @ViewChild("addStudentModalCloseBtn") addStudentModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("addClassRoomModalCloseBtn") addClassRoomModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  addStudentModel: StudentModel = new StudentModel();
  updateStudentModel: StudentModel = new StudentModel();

  addClassRoomModel: ClassRoomModel = new ClassRoomModel();

  pageNumbers: number[] = [1,2,3,4];

  loadingStartTime: number = 0;
  viewRenderedTime: number = 0;
  result: string = "";
  
  search: string = "";
  //hostUrl: string = "";

  // @ViewChild(DxReportViewerComponent, { static: false }) viewer: DxReportViewerComponent | any;
  //   reportUrl: string = "TestReport";
  //   // The built-in controller in the back-end ASP.NET Core Reporting application.
  //   invokeAction: string = '/DXXRDV';

  //   CustomizeMenuActions(event:any) {
  //       // Hide the "Print" and "PrintPage" actions. 
  //       var printAction = event.args.GetById(ActionId.Print);
  //       if (printAction)
  //           printAction.visible = false;
  //       var printPageAction = event.args.GetById(ActionId.PrintPage);
  //       if (printPageAction)
  //           printPageAction.visible = false;
  //   }

  //   print() {
  //       this.viewer.bindingSender.Print();
  //   }  

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {
    this.getAllClassRooms();
  }
  ngAfterContentInit(): void {
    
  }

  ngAfterViewChecked() {
    // Bu metod, görünüm güncellendiğinde her seferinde çağrılır
    this.viewRenderedTime = performance.now();
    const loadingDuration = this.viewRenderedTime - this.loadingStartTime;
    this.result = `Verilerin yüklenmesi ve görünüme yansıtılması ${loadingDuration} milisaniye sürdü.`;
  }

  changePage(pageNumber: number){
    if(pageNumber < 1){
      this.request.pageNumber = 1;
    }else{
      this.request.pageNumber = pageNumber;
    }
    

    this.getAllStudentsByClassRoomId(this.request.id);
  }

  getAllClassRooms() {
    this.http.get("ClassRooms/GetAll", (res) => {
      this.classRooms = res;

      if (this.classRooms.length > 0) {
        this.getAllStudentsByClassRoomId(this.classRooms[0].id);
      }
    });
  }

  getAllStudentsByClassRoomId(roomId: string | null) {
    this.request.id = roomId;

    this.response.datas = [];    

    this.loadingStartTime = performance.now();
    this.http.post("Students/GetAllByClassRoomId", this.request, res => {
      this.response = res;

      this.calculatePageNumbers();

      this.response.datas = this.response.datas!.map((val, index)=> {
        const indetityNumberPart1 = val.identityNumber.substring(0,2);
        const indetityNumberPart2 = val.identityNumber.substring(val.identityNumber.length -6,3);

        const newHashedIdentityNumber = indetityNumberPart1 + "******" +indetityNumberPart2;

        val.identityNumber = newHashedIdentityNumber;
        val.index = index + 1;
        return val;
      });
    });
  }

  createStudent(form: NgForm){
    if(form.valid){
      if(this.addStudentModel.classRoomId === "0"){
        alert("You have choose a valid class room");
        return;
      }

      this.http.post("Students/Create",this.addStudentModel, (res)=> {
        console.log(res);  
        
        this.addStudentModalCloseBtn?.nativeElement.click();
        this.swal.callToast(res.message);
        this.getAllStudentsByClassRoomId(this.addStudentModel.classRoomId);        
      });
    }
  }

  clearAddStudentModel(){
    this.addStudentModel = new StudentModel();    
    this.clearInputInValidClass();
  }

  clearInputInValidClass(){
    const inputs = document.querySelectorAll(".form-control.is-invalid");    
    for(let i in inputs){
      const el = inputs[i];
      el.classList.remove("is-invalid");
    }
  }

  clearAddCassRoomModel(){
    this.addClassRoomModel = new ClassRoomModel();
    this.clearInputInValidClass();
  }

  createClassRoom(form: NgForm){
    if(form.valid){
      this.http.post("ClassRooms/Create", this.addClassRoomModel, (res)=> {
        this.swal.callToast(res.message);
        this.addClassRoomModalCloseBtn?.nativeElement.click();
        this.getAllClassRooms();        
      });
    }
  }

  calculatePageNumbers(){
    this.pageNumbers = [];

    const startNumber = this.response.pageNumber -2 <= 1 ? 1 : this.response.pageNumber -2;
    const endNumber = this.response.totalPages <= this.response.pageNumber + 4 ? this.response.totalPages : this.response.pageNumber + 4;

    for(let i = startNumber; i <= endNumber; i++) {
      this.pageNumbers.push(i);      
    }
  }
}
