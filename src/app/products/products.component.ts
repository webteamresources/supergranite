import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 

  constructor(private httpService: HttpClient) { }

  configUrl = '../../assets/content/products.json';
  productsContent = [];
  productUrl = '../../../assets/content/products-list.json';
  productsList ;
  colorName;
  regionName;
  selectedColor;

  ngOnInit() {
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  this.httpService.get(this.productUrl).subscribe(
    productData => {
      this.productsList = productData;
      this.colorName = new Set(this.productsList.map(x => x.colorName).sort());
      this.regionName = new Set(this.productsList.map(x => x.regionName).sort());
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );

  }


  onSelect(selectedColor) {  
    selectedColor = null;
    for (var i = 0; i < this.colorName.length; i++)
    {
      if (this.selectedColor[i] == this.colorName) {
        this.selectedColor = this.selectedColor[i];
      }
    }
    console.log(selectedColor);
}

}
