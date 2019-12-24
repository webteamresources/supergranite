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
  productsList;
  ngOnInit() {    

    this.productsList = this.productService.getProduct();
  };
}