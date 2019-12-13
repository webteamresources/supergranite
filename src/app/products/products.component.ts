import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../assets/shared/product.service';
import { ProductModel } from './../../assets/shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 

  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../assets/content/products.json';
  productsContent = [];
  productsList;
  productsList1: ProductModel[];
  productsList2: ProductModel[];
  productsList3: ProductModel[];
  productsList4: ProductModel[];
  colorName;
  regionName;

  ngOnInit() {
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );   

    this.productsList1 = this.productService.getProduct1();
    this.productsList2 = this.productService.getProduct2();
    this.productsList3 = this.productService.getProduct3();
    this.productsList4 = this.productService.getProduct4();

    this.productsList = this.productsList1.concat(this.productsList2, this.productsList3, this.productsList4)

    this.colorName = new Set(this.productsList.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList.map(x => x.regionName).sort());
  }


//   onSelect(selectedColor) {  
//     selectedColor = null;
//     for (var i = 0; i < this.colorName.length; i++)
//     {
//       if (this.selectedColor[i] == this.colorName) {
//         this.selectedColor = this.selectedColor[i];
//       }
//     }
//     console.log(selectedColor);
// }

}
