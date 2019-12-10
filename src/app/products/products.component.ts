import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  configUrl = '../../assets/content/products.json';
  productsContent = [];

  ngOnInit() {
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
