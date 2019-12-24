import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './../../../assets/shared/product.service';

import { Router } from '@angular/router';
import { ProductDataModel } from 'src/assets/shared/ProductDataModel';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  
  constructor(private productService: ProductService) { }
  
  productsList: ProductDataModel[];
  
  ngOnInit() {
    this.storeProduct();
    console.log(this.storeProduct());
    //console.log(this.productService.getProduct());
  };

  childCurrentVal:string = '';
  childCurrentRegionVal:string = '';
  childSearchedVal:string = '';
  
  private storeProduct() {
    this.productService.getProduct();
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
