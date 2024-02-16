export class PaginationRequestModel{
    pageNumber:number = 1;
    pageSize:number = 10;
    search: string = "";
    id: string | null = null;
}