import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../assets/shared/product.model'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
ProductModelsOne: ProductModel[] = [
  new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
];
ProductModelsTwo: ProductModel[] = [
  new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
  new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
