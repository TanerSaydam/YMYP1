export class UserModel{
    id: string = "";
    firstName: string = "";
    lastName: string = "";
    fullName: string = "";
    email: string | null | undefined;
    phoneNumber: string | null | undefined;
    identityNumber :string = "";
    fullAddress: string = "";
    dateOfBirth: string | null | undefined;
    bloodType: string | null | undefined;
    doctorDetailId?: string | null;
    doctorDetail?: DoctorDetailModel | null;

}

export class DoctorDetailModel{
    userId: string = "";
    specialty: Specialty = Specialty.Acil;
    workingDays: string[] = [];
    appointmentPrice: number = 0;
    specialtyName:string = "";
    price: number = 0;
}

export enum Specialty
{
    Acil,
    Dahiliye,
    KadinHastaliklari,
    CocukHastaliklari,
    Ortopedi,
    Kardiyoloji,
    Noroloji,
    Psikiyatri,
    Goz
}