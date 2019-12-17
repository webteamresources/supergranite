export class TestimonialModel {
    public testimonialTxt:String;
    public testimonialAuthor:String;
    public testimonialAuthorPost:String;


    constructor(testimonialTxt: string, testimonialAuthor:string, testimonialAuthorPost:string){
        this.testimonialTxt = testimonialTxt;
        this.testimonialAuthor = testimonialAuthor;
        this.testimonialAuthorPost = testimonialAuthorPost;
    }
}