export class BannerModel {
    public src:String;
    public title:String;
    public alt:String;
    public SinceTxt:String;
    public bannerTL:String;
    public data:String;
    public link:String;


    constructor(src:string, title:string, alt:string, SinceTxt:string, bannerTL:String, data:String, link:string){
        this.src = src;
        this.title = title;
        this.alt = alt;
        this.SinceTxt = SinceTxt;
        this.bannerTL = bannerTL;
        this.data = data;
        this.link = link;
    }
}