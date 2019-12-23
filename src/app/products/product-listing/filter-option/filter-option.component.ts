import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../../assets/shared/product.service';
import { ProductModel } from '../../../../assets/shared/product.model';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productsList;
  productsList1: ProductModel[];
  productsList2: ProductModel[];
  productsList3: ProductModel[];
  productsList4: ProductModel[];
  colorName;
  regionName;
  @Output() colorSearched =  new EventEmitter<string>();
  @Output() outputToParent =  new EventEmitter<string>();
  @Output() outputRegionToParent =  new EventEmitter<string>();

  regionSelected;

  ngOnInit() {
    this.productsList1 = this.productService.getProduct1();
    this.productsList2 = this.productService.getProduct2();
    this.productsList3 = this.productService.getProduct3();
    this.productsList4 = this.productService.getProduct4();

    this.productsList = this.productsList1.concat(this.productsList2, this.productsList3, this.productsList4);

    this.colorName = new Set(this.productsList.map(x => x.colorName).sort());
    this.regionName = new Set(this.productsList.map(x => x.regionName).sort());   
  }
  
  onColorSelect(selected: string) {
    this.outputToParent.emit(selected);
  }
  
  onRegionSelect(selected: string) {
    this.outputRegionToParent.emit(selected);
  }
  onColorSearched(selected: string) {
    this.colorSearched.emit(selected);
  }


}