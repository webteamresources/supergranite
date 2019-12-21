import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';
import { TestimonialModel } from 'src/assets/shared/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})

@NgModule({
  imports: [ CarouselModule ],
  declarations: [ TestimonialsComponent ]
})

export class TestimonialsComponent implements OnInit {

  customOptions: OwlOptions = {
    center: false,
    loop: true,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    autoHeight:true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
  images: TestimonialModel[] = [
    new TestimonialModel ( "It is my personal experience. Super Granites and Marbles facilitates vast and affordable Granite and marble range within best price and quality assurance","Ravi Patel","Supply Chain Head" ),
    new TestimonialModel ( "I have been a regular one with Super. Be it any project or client the experience has been very good to the satisfaction of clients","Dhruv Kumar","Architect" ),
    new TestimonialModel ( "Wonderful service, unbeatable prices and a range to be spoilt for choices. They do an excellent job and are courteous and responsive. Highly recommend them.","Mithila Garg","Procurement Head" ),
    new TestimonialModel ( "Had my new private office installed with Super Granites and Marbles cultured marble products. It is an upscale multi-unit building  with garden space and a beautiful driveway we designed with their cobbles. They delivered all products on schedule that helped quantify our design specifications.","Ajay Rai","Architect" )
];
   

}
