import { OnInit, Component } from '@angular/core';
import { ProductService } from 'src/assets/shared/product.service';
import { ProductModel } from 'src/assets/shared/product.model';
import { ProductDataModel } from 'src/assets/shared/ProductDataModel';
@Component({
    selector: 'app-granites',
    templateUrl: './granites.component.html',
    styleUrls: []
  })
export class GranitesComponent implements OnInit {
  constructor(private productService: ProductService) { } 
  productsList: ProductDataModel[];
  productsDetails: ProductModel[];
  productSec = true;
  productCont = true;
  childSizeVal;
  classname;
  childCurrentVal:string = '';
  childCurrentRegionVal:string = '';
  childSearchedVal:string = '';

  ngOnInit() {
    this.fetchProducts();

    if(this.childSizeVal === 'small') {
      this.classname = 'col-md-3 col-lg-3'
      }
      else if(this.childSizeVal === 'large') {
          this.classname = 'col-md-6 col-lg-6'
      }
      else {
          this.classname = 'col-md-6 col-lg-4'
      }

      if(this.productCont == false) {
        this.productSec = false;
      }
  };

  getOutputVal(selected: string) {
      if(selected) {
        this.childCurrentVal = selected;
      }
  }
  getOutputRegionVal(selected: string) {
      if(selected) {
        this.childCurrentRegionVal = selected;
      }
  }
  getSearchVal(selected: string) {
      if(selected) {
        this.childSearchedVal = selected.toLowerCase();
      }
  }

  getOutputSizeVal(selected: string) {
    if(selected) {
      this.childSizeVal = selected;
      if(this.childSizeVal == 'small') {
        this.classname = 'col-md-3 col-lg-3'
      }
      else if(this.childSizeVal == 'large') {
          this.classname = 'col-md-6 col-lg-6'
      }
      else {
          this.classname = 'col-md-6 col-lg-4'
      }
    }
}


  
  private fetchProducts() {
    this.productService.getProduct().subscribe(data => {
      this.productsList = data['productDetails'];
      this.productsDetails = this.productsList['product'];
    });
  }
}