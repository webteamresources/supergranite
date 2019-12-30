import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../../assets/shared/product.service';
import { ProductDataModel } from '../../../../assets/shared/ProductDataModel';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  pdocutsNew;
  constructor(private productService: ProductService) { }
  configUrl = '../../../../assets/content/product-data.json';
  productContent;
  productsList: ProductDataModel[];
  productsDetails;
  colorNames;
  colorList=[];
  regionNames;
  regionList=[];

  @Output() colorSearched =  new EventEmitter<string>();
  @Output() outputToParent =  new EventEmitter<string>();
  @Output() outputRegionToParent =  new EventEmitter<string>();
  @Output() outputSizeToParent =  new EventEmitter<string>();

  ngOnInit() {

    this.productService.getProduct().subscribe(
      data => {
        this.productsList = data['productDetails'];
        this.productsDetails = this.productsList.map(x => x.product);
        for (let i = 0; i < this.productsDetails.length; i++) {
          for (let j = 0; j < this.productsDetails[i].length; j++) {
           this.colorList.push(this.productsDetails[i][j].colorName);
           this.regionList.push(this.productsDetails[i][j].regionName);
          }
      }
        this.colorNames = new Set(this.colorList.sort());
        this.regionNames = new Set(this.regionList.sort());
      }
    );
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
  onSizeChanged(selected: string) {
    this.outputSizeToParent.emit(selected);
  }


}