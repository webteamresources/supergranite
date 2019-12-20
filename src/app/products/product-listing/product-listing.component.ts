import { Component, OnInit, Input } from '@angular/core';
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
  pgTitle= 'Products';
  contentTxt1= '<p>They prefer a granite supplier or podium for getting big varieties and secure transactions under a single roof. Consequently, Super Granites and Marbles, one the professional and experienced granite suppliers in India, offers real-time solutions for universal buyers</p>';
  contentTxt2= '<p>We provide an exclusive range of Marbles that is the best in the industry and affordable for installation purposes. For building a house from scratch or extending your office facility, Marble from Super Granites and Marbles is the most ultimate choice which adds elegance and creates tranquility in the atmosphere. </p>';
  contentTxt3= '<p>Engineered stone is less porous, more flexible, and harder than many types of natural stone. Since it has a uniform internal structure, it does not have hidden cracks or flaws that may exist in natural stone. Super Granites and Marbles Engineered Stone products are undisputedly the most versatile and practical building material; truly nature redefined.</p>';
  contentTxt4= '<p>Cobble or Cobblestone a rather natural building material based on its size is also used for pavement roads and streets. Pebble whereas, a smaller stone especially one rounded by the action of water is used in landscaped gardens, pools and aquaria. A variety of these stones are available in various sizes and colors.</p>';
  productCat1= 'Granites';
  productCat2= 'Marbles';
  productCat3= 'Engineering Stone';
  productCat4= 'Peeble and Cobble';
  productsContent = [];
  productsContent1 = [];
  productsContent2 = [];
  productsContent3 = [];
  productsContent4 = [];
  productsList: ProductModel[];
  productsList1: ProductModel[];
  productsList2: ProductModel[];
  productsList3: ProductModel[];
  productsList4: ProductModel[];

  colorNames;
  selectedName: string;
  
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
  this.productsList = this.productsList1.concat(this.productsList2, this.productsList3, this.productsList4);
  this.colorNames = this.productsList.map(x => x.colorName);
  };

  childCurrentVal:string = '';
  childCurrentRegionVal:string = '';
  childSearchedVal:string = '';
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
        this.childSearchedVal = selected;
      }
  }

}
