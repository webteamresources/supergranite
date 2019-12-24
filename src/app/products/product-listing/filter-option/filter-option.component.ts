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
  colorNames;
  regionNames;
  @Output() colorSearched =  new EventEmitter<string>();
  @Output() outputToParent =  new EventEmitter<string>();
  @Output() outputRegionToParent =  new EventEmitter<string>();

  regionSelected;

  ngOnInit() {
    // this.colorNames = this.productService.getColorName();
    // this.regionNames = this.productService.getRegionName();
    // console.log(this.colorNames);
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