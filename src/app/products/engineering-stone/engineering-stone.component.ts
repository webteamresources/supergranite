import { OnInit, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/assets/shared/product.service';
import { ProductModel } from 'src/assets/shared/product.model';
@Component({
    selector: 'app-engineering-stone',
    templateUrl: './engineering-stone.component.html',
    styleUrls: []
  })
export class EngineeringStoneComponent implements OnInit {
  colorName: Set<string>;
  regionName: Set<string>;
    
  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  pgTitle= 'Products';
  contentTxt3= '<p>Engineered stone is less porous, more flexible, and harder than many types of natural stone. Since it has a uniform internal structure, it does not have hidden cracks or flaws that may exist in natural stone. Super Granites and Marbles Engineered Stone products are undisputedly the most versatile and practical building material; truly nature redefined.</p>';

  productCat3 = 'Engineering Stone';
  productsContent = [];
  productsContent3 = [];
  productsList3: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent3 = this.productsContent['productDetails'][2];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.productsList3 = this.productService.getProduct3();
    
    this.colorName = new Set(this.productsList3.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList3.map(x => x.regionName).sort());
  };
}