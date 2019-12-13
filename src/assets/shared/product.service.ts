import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from './product.model';

@Injectable({providedIn:'root'})

export class ProductService implements OnInit {

    constructor() {}    
    ngOnInit() {
    }
    productsList1: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Granites", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Granites", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" ),
            new ProductModel ( "Volga Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Volga-Blue-Granite.jpg" ),
            new ProductModel ( "Apple Green Granite ", "Granites", "Apple Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Apple-Green-Granite.jpg" ),
            new ProductModel ( "Bala Flower Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Bala-Flower-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Caliber Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Caliber-Brown-Granite.jpg" ),
            new ProductModel ( "Cherry Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Cherry-Brown-Granite.jpg" ),
            new ProductModel ( "Fish Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Fish-Brown-Granite.jpg"),
            new ProductModel ( "French Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/French-Brown-Granite.jpg" ),
            new ProductModel ( "G D Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/G-D-Brown-Granite.jpg"),
            new ProductModel ( "Green Pearl Granite ", "Granites", "Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Green-Pearl-Granite.jpg"),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Honey-Brown-Granite.jpg" )
        ];
    productsList2: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Granites", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Granites", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" ),
            new ProductModel ( "Volga Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Volga-Blue-Granite.jpg" ),
            new ProductModel ( "Apple Green Granite ", "Granites", "Apple Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Apple-Green-Granite.jpg" ),
            new ProductModel ( "Bala Flower Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Bala-Flower-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Caliber Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Caliber-Brown-Granite.jpg" ),
            new ProductModel ( "Cherry Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Cherry-Brown-Granite.jpg" ),
            new ProductModel ( "Fish Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Fish-Brown-Granite.jpg"),
            new ProductModel ( "French Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/French-Brown-Granite.jpg" ),
            new ProductModel ( "G D Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/G-D-Brown-Granite.jpg"),
            new ProductModel ( "Green Pearl Granite ", "Granites", "Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Green-Pearl-Granite.jpg"),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Honey-Brown-Granite.jpg" )
        ];
    productsList3: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Granites", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Granites", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" ),
            new ProductModel ( "Volga Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Volga-Blue-Granite.jpg" ),
            new ProductModel ( "Apple Green Granite ", "Granites", "Apple Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Apple-Green-Granite.jpg" ),
            new ProductModel ( "Bala Flower Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Bala-Flower-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Caliber Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Caliber-Brown-Granite.jpg" ),
            new ProductModel ( "Cherry Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Cherry-Brown-Granite.jpg" ),
            new ProductModel ( "Fish Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Fish-Brown-Granite.jpg"),
            new ProductModel ( "French Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/French-Brown-Granite.jpg" ),
            new ProductModel ( "G D Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/G-D-Brown-Granite.jpg"),
            new ProductModel ( "Green Pearl Granite ", "Granites", "Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Green-Pearl-Granite.jpg"),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Honey-Brown-Granite.jpg" )
        ];
    productsList4: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Granites", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Granites", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" ),
            new ProductModel ( "Volga Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Volga-Blue-Granite.jpg" ),
            new ProductModel ( "Apple Green Granite ", "Granites", "Apple Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Apple-Green-Granite.jpg" ),
            new ProductModel ( "Bala Flower Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Bala-Flower-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Caliber Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Caliber-Brown-Granite.jpg" ),
            new ProductModel ( "Cherry Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Cherry-Brown-Granite.jpg" ),
            new ProductModel ( "Fish Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Fish-Brown-Granite.jpg"),
            new ProductModel ( "French Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/French-Brown-Granite.jpg" ),
            new ProductModel ( "G D Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/North-Indian-Granites/G-D-Brown-Granite.jpg"),
            new ProductModel ( "Green Pearl Granite ", "Granites", "Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Green-Pearl-Granite.jpg"),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Honey-Brown-Granite.jpg" )
        ];
    getProduct1() {
        return this.productsList1.slice();
    }
    getProduct2() {
        return this.productsList2.slice();
    }
    getProduct3() {
        return this.productsList3.slice();
    }
    getProduct4() {
        return this.productsList4.slice();
    }
    

}