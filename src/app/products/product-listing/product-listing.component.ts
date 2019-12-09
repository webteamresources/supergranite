import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  configUrl = '../../../assets/content/products.json';
  productsContent = [];
  productDetails = [];

  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productDetails = this.productsContent['productDetails'];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


}
