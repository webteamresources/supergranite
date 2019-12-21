import { OnInit, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/assets/shared/product.service';
import { ProductModel } from 'src/assets/shared/product.model';
@Component({
    selector: 'app-marbles',
    templateUrl: './marbles.component.html',
    styleUrls: []
  })
export class MarblesComponent implements OnInit {
  colorName: Set<string>;
  regionName: Set<string>;
    
  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  pgTitle= 'Products';
  contentTxt2= '<p>We provide an exclusive range of Marbles that is the best in the industry and affordable for installation purposes. For building a house from scratch or extending your office facility, Marble from Super Granites and Marbles is the most ultimate choice which adds elegance and creates tranquility in the atmosphere. </p>';

  productCat2 = 'Marbles';
  productsContent = [];
  productsContent2 = [];
  productsList2: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent2 = this.productsContent['productDetails'][1];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.productsList2 = this.productService.getProduct2();
    
    this.colorName = new Set(this.productsList2.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList2.map(x => x.regionName).sort());
  };
}