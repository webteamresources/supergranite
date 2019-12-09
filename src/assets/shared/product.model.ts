export class ProductModel {
    public name:String;
    public category:String;
    public imagePath:String;

    constructor(name: string, category:string, imagePath:string){
        this.name = name;
        this.category = category;
        this.imagePath = imagePath;
    }
}