import { UserModel } from "./user.model";

export class AppointmentModel{
    id: string = "";
    doctorId: string = "";
    doctor: UserModel = new UserModel();
    patientId: string = "";
    patient: UserModel = new UserModel();
    startDate: string = "";
    endDate: string  ="";
    epicrisisReport: string = "";
    price: number = 0;
    isItFinish: boolean = false;
    
}