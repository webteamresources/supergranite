import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../../assets/shared/product.service';
import { ProductModel } from './../../../assets/shared/product.model';

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
  productsList: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );   
    
  this.productsList = this.productService.getProducts();
  console.log(this.productsList);
  };

}
