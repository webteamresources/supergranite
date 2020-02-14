import { Component, OnInit, NgModule } from '@angular/core';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';
import { ProductService } from './../../assets/shared/product.service';
import { ProductModel } from './../../assets/shared/product.model';
import { ProductDataModel } from 'src/assets/shared/ProductDataModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


@NgModule({
  imports: [ CarouselModule ],
  declarations: [ HomeComponent ]
})
export class HomeComponent implements OnInit {  
  
  pagePath = ['../products/granites/', '../products/marbles', '../products/engineering-stone', '../products/pebble-and-cobble'];


  customOptions01: OwlOptions = {
    center: false,
    loop: false,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      480:{
        items: 2
      },
      992:{
        items: 3
      }
    }
  }

  customOptions02: OwlOptions = {
    center: false,
    loop: false,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      480:{
        items: 2
      },
      992:{
        items: 3
      }
    }
  }

  customOptions03: OwlOptions = {
    center: false,
    loop: false,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      480:{
        items: 2
      },
      992:{
        items: 3
      }
    }
  }

  
  constructor(private productService:ProductService) { }
  
  productsContent = [];
  productsList: ProductDataModel[];
  productsDetails: ProductModel[];  
  ngOnInit() {    
    this.productService.getProduct().subscribe(
      data => {
        this.productsList = data['productDetails'];
        this.productsDetails = this.productsList['product'];
      }
    );
  }

    
}
