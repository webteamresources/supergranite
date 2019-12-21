import { OnInit, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/assets/shared/product.service';
import { ProductModel } from 'src/assets/shared/product.model';
@Component({
    selector: 'app-pebble-cobble',
    templateUrl: './pebble-cobble.component.html',
    styleUrls: []
  })
export class PebbleCobbleComponent implements OnInit {
    
  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  pgTitle= 'Products';
  contentTxt4= '<p>Cobble or Cobblestone a rather natural building material based on its size is also used for pavement roads and streets. Pebble whereas, a smaller stone especially one rounded by the action of water is used in landscaped gardens, pools and aquaria. A variety of these stones are available in various sizes and colors.</p>';

  productCat4 = 'Pebble and Cobble ';
  productsContent = [];
  productsContent4 = [];
  productsList4: ProductModel[];
  productsList;
  colorName;
  regionName;
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent4 = this.productsContent['productDetails'][3];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );   
    
    this.productsList4 = this.productService.getProduct4();
    
    this.colorName = new Set(this.productsList4.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList4.map(x => x.regionName).sort());
  };
}