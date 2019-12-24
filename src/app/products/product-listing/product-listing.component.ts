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
  ngOnInit() {     
    this.fetchProducts();
  }

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
}