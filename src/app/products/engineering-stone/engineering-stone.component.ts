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
    
  constructor(private productService: ProductService) { }
  productsList;
  ngOnInit() {    

    this.productsList = this.productService.getProduct();
  };
}