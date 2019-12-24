import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../assets/shared/product.service';
import { ProductDataModel } from './../../../assets/shared/ProductDataModel';
import { ProductModel } from 'src/assets/shared/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  configUrl = '../../../assets/content/product-data.json';
  productsContent = [];
  productsList: ProductDataModel[];
  productsDetails: ProductModel[];
  colorName;
  regionName;

  ngOnInit(){
    //this.productsList = this.productService.getProduct();
  }

}
