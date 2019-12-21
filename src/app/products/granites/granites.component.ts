import { OnInit, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/assets/shared/product.service';
import { ProductModel } from 'src/assets/shared/product.model';
@Component({
    selector: 'app-granites',
    templateUrl: './granites.component.html',
    styleUrls: []
  })
export class GranitesComponent implements OnInit {
  colorName: Set<string>;
  regionName: Set<string>;
    
  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  pgTitle= 'Products';
  contentTxt1= '<p>They prefer a granite supplier or podium for getting big varieties and secure transactions under a single roof. Consequently, Super Granites and Marbles, one the professional and experienced granite suppliers in India, offers real-time solutions for universal buyers</p>';

  productCat1 = 'Granites';
  productsContent = [];
  productsContent1 = [];
  productsList1: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent1 = this.productsContent['productDetails'][0];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.productsList1 = this.productService.getProduct1();
    
    this.colorName = new Set(this.productsList1.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList1.map(x => x.regionName).sort());
  };
}