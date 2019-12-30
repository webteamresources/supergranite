import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProductService } from 'src/assets/shared/product.service';
import { ProductDataModel } from 'src/assets/shared/ProductDataModel';
import { ProductModel } from 'src/assets/shared/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  constructor(private productService: ProductService) { } 
  productsList: ProductDataModel[];
  productsDetails: ProductModel[];

  childSizeVal;
  classname;

  contentDisplay = true;

  ngOnInit() {     
    this.fetchProducts();

    if(this.childSizeVal === 'small') {
      this.classname = 'col-md-3 col-lg-3'
      }
      else if(this.childSizeVal === 'large') {
          this.classname = 'col-md-6 col-lg-6'
      }
      else {
          this.classname = 'col-md-6 col-lg-4'
      }
  };
  childCurrentVal:string = '';
  childCurrentRegionVal:string = '';
  childSearchedVal:string = '';

  private fetchProducts() {
    this.productService.getProduct().subscribe(data => {
      this.productsList = data['productDetails'];
      this.productsDetails = this.productsList['product'];
    });
  }

  getOutputVal(selected: string) {
      if(selected) {
        this.childCurrentVal = selected;
      }
  }
  getOutputRegionVal(selected: string) {
      if(selected) {
        this.childCurrentRegionVal = selected;
      }
  }
  getSearchVal(selected: string) {
      if(selected) {
        this.childSearchedVal = selected.toLowerCase();
      }
  }

  getOutputSizeVal(selected: string) {
    if(selected) {
      this.childSizeVal = selected;
      if(this.childSizeVal == 'small') {
        this.classname = 'col-md-3 col-lg-3'
      }
      else if(this.childSizeVal == 'large') {
          this.classname = 'col-md-6 col-lg-6'
      }
      else {
          this.classname = 'col-md-6 col-lg-4'
      }
    }
}

}

