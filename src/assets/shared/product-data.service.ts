import { ProductService } from './product.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from './product.model';

@Injectable({providedIn:'root'})

export class ProductDataStorage implements OnInit {
    constructor(private httpService: HttpClient){}
    ngOnInit () {
    }
    productUrl = 'assets/content/products-list.json';
    
    productsList1: ProductModel[] = [];
    productsList2: ProductModel[] = [];
    productsList3: ProductModel[] = [];
    productsList4: ProductModel[] = [];   
    
    getProducts() {
        this.httpService
        .get<ProductModel>(this.productUrl)
        .subscribe(
            productData => {
                this.productsList1 = productData['productList1'];
                this.productsList2 = productData['productList2'];
                this.productsList3 = productData['productList3'];
                this.productsList4 = productData['productList4'];
                console.log(productData);
              },
            (err: HttpErrorResponse) => {
              console.log (err.message);
            }
          );
    }
}