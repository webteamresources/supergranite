import { ProductDataModel } from './ProductDataModel';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class ProductDataStorage implements OnInit {
    constructor(private httpService: HttpClient){}
    ngOnInit () {
    }
    productUrl = './assets/content/product-data.json';
    
    productsDetails;
    getProducts():Observable<any> {
      return this.httpService
        .get(this.productUrl);
        // .subscribe(
        //     productData => {
        //         this.productsDetails = productData;
        //       },
        //     (err: HttpErrorResponse) => {
        //       console.log (err.message);
        //     }
        //   );
    }
}