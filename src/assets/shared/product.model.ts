export class ProductModel {
    public name:String;
    public description:String;
    public category:String;
    public imagePath:String;

    constructor(name: string, category:string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.category = category;
    }
}