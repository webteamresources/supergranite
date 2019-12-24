import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductDataModel } from './ProductDataModel';
import { ProductModel } from './product.model';

@Injectable({providedIn:'root'})

export class ProductService implements OnInit {
    constructor(private httpService:HttpClient) {}    
    // productsList: ProductDataModel[];
    // productsDetails: ProductModel[];
    ngOnInit() {
    }
    configUrl = '../../../assets/content/product-data.json';
    getProduct() {
        return this.httpService.get<ProductDataModel[]>(this.configUrl);
    }   

    // fetchProducts(productsList: ProductDataModel[]) {
    //   this.getProduct().subscribe(productsList => {
    //     this.productsList = productsList['productDetails'];
    //     this.productsDetails = this.productsList['product'];
    //   });
    // }

    getColorName() {
      
    }

    getRegionName() {        
        
    }

    

}