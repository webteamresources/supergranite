import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  
  constructor(private productService: ProductService) { }
  
  productsList: ProductDataModel[];  
  ngOnInit() {
  //this.productsList = this.productService.getProduct();
  };

}
