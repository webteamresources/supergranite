export class ContactModel {
    private fName: string;
    private lName: string;
    private subject: string;
    private message: string;

    constructor(fName:string, lName:string, subject:string, message:string ){
        this.fName = fName;
        this.lName = lName;
        this.subject = subject;
        this.message = message;
    }
}