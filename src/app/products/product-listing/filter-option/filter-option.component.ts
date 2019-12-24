import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../../assets/shared/product.service';
import { ProductModel } from '../../../../assets/shared/product.model';
import { ProductDataModel } from '../../../../assets/shared/ProductDataModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  constructor(private productService: ProductService, private httpService:HttpClient) { }
  configUrl = '../../../../assets/content/product-data.json';
  productContent;
  productsList: ProductDataModel[];
  productsDetails;
  colorNames;
  regionNames;

  @Output() colorSearched =  new EventEmitter<string>();
  @Output() outputToParent =  new EventEmitter<string>();
  @Output() outputRegionToParent =  new EventEmitter<string>();

  ngOnInit() {
    this.httpService.get<ProductDataModel[]>(this.configUrl).subscribe(
      data => {
        this.productContent = data;
        this.productsList = this.productContent['productDetails'];
        this.productsDetails = this.productsList.map(x => x.product);
        //this.colorNames = this.productsDetails.map(x => x.colorName);
    
        this.colorNames = new Set(this.productsDetails[0].map(x => x.colorName).sort());
        this.regionNames = new Set(this.productsDetails[0].map(x => x.regionName).sort());

        console.log(this.colorNames);
        console.log(this.productsDetails);
        console.log(this.productsList);
        console.log(this.productContent);
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


}