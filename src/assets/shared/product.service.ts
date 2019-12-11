import { ProductModel } from './product.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class ProductService {

    constructor(private router: Router) {}
    
    productsList1: ProductModel[] = [
            new ProductModel ( "test 1", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 2", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 3", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 3", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 3", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 3", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "test 3", "Granites", "Red", "Norway", "/assets/resources/images/products/granite-products/granite-blocks.jpg" )
        ];
    productsList2: ProductModel[] = [
            new ProductModel ( "Manglore Granite", "Marbles", "Blue", "North India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Chennai Granite", "Marbles", "Blue", "North India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Rajasthan Granite", "Marbles", "Blue", "North India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" )
        ];
    productsList3: ProductModel[] = [
            new ProductModel ( "Manglore Granite", "Engineering Stone", "Brown", "South India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Chennai Granite", "Engineering Stone", "Brown", "South India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Rajasthan Granite", "Engineering Stone", "Brown", "South India", "/assets/resources/images/products/granite-products/granite-blocks.jpg" )
        ];
    productsList4: ProductModel[] = [
            new ProductModel ( "Manglore Granite", "Peeble & Cobble", "Orange", "Brazil", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Chennai Granite", "Peeble & Cobble", "Orange", "Brazil", "/assets/resources/images/products/granite-products/granite-blocks.jpg" ),
            new ProductModel ( "Rajasthan Granite", "Peeble & Cobble", "Orange", "Brazil", "/assets/resources/images/products/granite-products/granite-blocks.jpg" )
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