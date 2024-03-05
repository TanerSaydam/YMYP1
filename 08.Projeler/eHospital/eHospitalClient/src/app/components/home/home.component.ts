import { Component, OnInit } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DxSchedulerModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  appointmentsData: any[] = [];

  selectedDoctorId: string = "";

  currentDate: Date = new Date();

  doctors: UserModel[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.http.get("https://localhost:7169/api/Doctors/GetAllDoctors").subscribe((res: any) => {
      this.doctors = res.data;
    })
  }

  getDoctorAppointments() {
    if (this.selectedDoctorId === "") return;

    this.http.get(`https://localhost:7169/api/Appointments/GetAllByDoctorId?doctorId=${this.selectedDoctorId}`).subscribe((res:any) => {

    console.log(res.data);
    
    const data = res.data.map((val: any, i: number) => {
      return {
        text: val.patient.fullName,
        startDate: new Date(val.startDate),
        endDate: new Date(val.endDate)
      };
    });

      this.appointmentsData = data;
    })
  }
}
