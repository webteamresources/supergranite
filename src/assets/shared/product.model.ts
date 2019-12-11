export class ProductModel {
    public name:String;
    public category:String;
    public colorName:string;
    public region:string;
    public imagePath:String;


    constructor(name: string, category:string, colorName:string, region:string, imagePath:string){
        this.name = name;
        this.category = category;
        this.colorName = colorName;
        this.imagePath = imagePath;
        this.region = region;
    }
}