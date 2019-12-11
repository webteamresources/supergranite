import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../../assets/shared/product.service';
import { ProductModel } from './../../../assets/shared/product.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  //productUrl = '../../../assets/content/products-list.json';
  productsContent = [];
  productsContent1 = [];
  productsContent2 = [];
  productsContent3 = [];
  productsContent4 = [];
  productsList1: ProductModel[];
  productsList2: ProductModel[];
  productsList3: ProductModel[];
  productsList4: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent1 = this.productsContent['productDetails'][0];
        this.productsContent2 = this.productsContent['productDetails'][1];
        this.productsContent3 = this.productsContent['productDetails'][2];
        this.productsContent4 = this.productsContent['productDetails'][3];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
  this.productsList1 = this.productService.getProduct1();
  this.productsList2 = this.productService.getProduct2();
  this.productsList3 = this.productService.getProduct3();
  this.productsList4 = this.productService.getProduct4();
  };

 

}
