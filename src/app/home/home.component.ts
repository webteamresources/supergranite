import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../assets/shared/product.service';
import { ProductModel } from './../../assets/shared/product.model';

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

  constructor(private httpService: HttpClient, private productService: ProductService) { }

  configUrl = '../../../assets/content/products.json';
  //productUrl = '../../../assets/content/products-list.json';
  pgTitle= 'Products';
  contentTxt1= '<p>They prefer a granite supplier or podium for getting big varieties and secure transactions under a single roof. Consequently, Super Granites and Marbles, one the professional and experienced granite suppliers in India, offers real-time solutions for universal buyers</p>';
  contentTxt2= '<p>We provide an exclusive range of Marbles that is the best in the industry and affordable for installation purposes. For building a house from scratch or extending your office facility, Marble from Super Granites and Marbles is the most ultimate choice which adds elegance and creates tranquility in the atmosphere. </p>';
  contentTxt3= '<p>Engineered stone is less porous, more flexible, and harder than many types of natural stone. Since it has a uniform internal structure, it does not have hidden cracks or flaws that may exist in natural stone. Super Granites and Marbles Engineered Stone products are undisputedly the most versatile and practical building material; truly nature redefined.</p>';
  contentTxt4= '<p>Cobble or Cobblestone a rather natural building material based on its size is also used for pavement roads and streets. Pebble whereas, a smaller stone especially one rounded by the action of water is used in landscaped gardens, pools and aquaria. A variety of these stones are available in various sizes and colors.</p>';
  productCat1= 'Granites';
  productCat2= 'Marbles';
  productCat3= 'Engineering Stone';
  productCat4= 'Peeble and Cobble';
  productsContent = [];
  productsContent1 = [];
  productsContent2 = [];
  productsContent3 = [];
  productsContent4 = [];
  productsList1: ProductModel[];
  productsList2: ProductModel[];
  productsList3: ProductModel[];
  productsList4: ProductModel[];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.productsContent = data as string [];
        this.productsContent1 = this.productsContent['productDetails'][0];
        this.productsContent2 = this.productsContent['productDetails'][1];
        this.productsContent3 = this.productsContent['productDetails'][2];
        this.productsContent4 = this.productsContent['productDetails'][3];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.productsList1 = this.productService.getProduct1().slice(0, 3);
    this.productsList2 = this.productService.getProduct2().slice(0, 3);
    this.productsList3 = this.productService.getProduct3().slice(0, 3);
    this.productsList4 = this.productService.getProduct4().slice(0, 3);
  };

}
