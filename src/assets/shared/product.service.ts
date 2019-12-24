import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductDataModel } from './ProductDataModel';
import { ProductModel } from './product.model';

@Injectable({providedIn:'root'})

export class ProductService implements OnInit {
    constructor(private httpService:HttpClient) {}   
    //productsContent = [];
    productsList: ProductDataModel[];
    productsDetails: ProductModel[];
    colorNames;
    regionNames;

    configUrl = '../../assets/content/product-data.json';
    ngOnInit() {
    }

    getProduct(){
      this.httpService.get<ProductDataModel[]>(this.configUrl)
      .subscribe( 
          data => {
            //this.productsContent = data;
            this.productsList = data;
            console.log(this.productsDetails);
            console.log(this.productsList);
            return this.productsList;
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
    }
    getColorName(){
      return this.colorNames = new Set(this.productsDetails.map(x => x.colorName).sort());
    }
    getRegionName() {
      return this.regionNames = new Set(this.productsDetails.map(x => x.regionName).sort()); 
    }

    

}