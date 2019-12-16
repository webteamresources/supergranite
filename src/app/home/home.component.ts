import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../assets/shared/product.service';
import { ProductModel } from './../../assets/shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  //productUrl = '../../../assets/content/products-list.json';
  pgTitle= 'Products';
  contentTxt1= '<p>They prefer a granite supplier or podium for getting big varieties and secure transactions under a single roof. Consequently, Super Granites and Marbles, one the professional and experienced granite suppliers in India, offers real-time solutions for universal buyers</p>';
  contentTxt2= '<p>Higher granite production in India entices a large number of granite buyers from all corners of the world. When it comes to knowing more about granite production by country, how to export granite, and the largest granite producing countries, Indian granite regions (North and South India) put an end to all searches. Super Granites and Marbles is a proud supplier of region-specific North Indian and South Indian granite in different sizes, types, thicknesses, textures, and designs.</p>';
  contentTxt3= '<p>Higher granite production in India entices a large number of granite buyers from all corners of the world. When it comes to knowing more about granite production by country, how to export granite, and the largest granite producing countries, Indian granite regions (North and South India) put an end to all searches. Super Granites and Marbles is a proud supplier of region-specific North Indian and South Indian granite in different sizes, types, thicknesses, textures, and designs.</p>';
  contentTxt4= '<p>Higher granite production in India entices a large number of granite buyers from all corners of the world. When it comes to knowing more about granite production by country, how to export granite, and the largest granite producing countries, Indian granite regions (North and South India) put an end to all searches. Super Granites and Marbles is a proud supplier of region-specific North Indian and South Indian granite in different sizes, types, thicknesses, textures, and designs.</p>';
  productCat1= 'Granites';
  productCat2= 'Marbles';
  productCat3= 'Engineering Stone';
  productCat4= 'Peeble and Cobble';
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
        console.log(this.productsContent4);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.productsList1 = this.productService.getProduct1().slice(0, 3);
    this.productsList2 = this.productService.getProduct2().slice(0, 3);
    this.productsList3 = this.productService.getProduct3().slice(0, 3);
    this.productsList4 = this.productService.getProduct4().slice(0, 3);
  };

}
