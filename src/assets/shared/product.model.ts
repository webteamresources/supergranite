export class ProductModel {
    public name:String;
    public category:String;
    public imagePath:String;

<<<<<<< HEAD
    constructor(name: string, category:string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.category = category;
=======
    constructor(name: string, category:string, imagePath:string){
        this.name = name;
        this.category = category;
        this.imagePath = imagePath;
>>>>>>> a40e41fc068eb3908cef4b1b136b9aeed44ae78b
    }
}