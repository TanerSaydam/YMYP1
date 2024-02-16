export class PaginationResponseModel<T>{
    datas: T | undefined;
    firstPage: boolean = false;
    lastPage: boolean = false;
    pageNumber: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
}