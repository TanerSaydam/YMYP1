export class TicketModel{
    id: string = "";
    subject: string = "";
    appUser: any;
    userName: string = "";
    createdDate: Date = new Date();
    isOpen: boolean = false;
    fileUrls: TicketFileUrlModel[] = [];
}

export class TicketDetailModel{
    id: string = "";
    content: string = "";
    appUserId: string = "";
    appUser: any;
    createdDate: string = "";
}

export class TicketFileUrlModel{
    id: string = "";
    ticketId: string = "";
    fileUrl: string = "";
}