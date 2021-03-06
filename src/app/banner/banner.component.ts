import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';
import { BannerModel } from 'src/assets/shared/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})

@NgModule({
  imports: [ CarouselModule ],
  declarations: [ BannerComponent ]
})

export class BannerComponent implements OnInit {

customOptionsfullBanner: OwlOptions = {
    loop:true,
    autoplay: false,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  }

slides: BannerModel[] = [
    new BannerModel ( "../../assets/resources/images/bg_1.jpg","Modern Designs, Conventional and Exotic.","Modern Designs, Conventional and Exotic.","Since 1979","Modern Designs, Conventional and Exotic." ),
    new BannerModel ( "../../assets/resources/images/bg_2.jpg","For Creating Amazing Architecture Designs.","For Creating Amazing Architecture Designs.","Since 1979","For Creating Amazing Architecture Designs." )
];
  
  constructor() {
  }
  
  ngOnInit() {
  }

}
