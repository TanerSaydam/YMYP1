export class ResultModel<T>{
    data?:T;
    errorMessages?: string[];
    isSuccessfull: boolean = true;
    statusCode: number = 200
}