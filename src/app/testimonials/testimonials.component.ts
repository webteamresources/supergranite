import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/assets/shared/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images: TestimonialModel[] = [
    new TestimonialModel ( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","Ravi Smith","CEO Founder of Commercial Building" ),
    new TestimonialModel ( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","Ravi Smith","CEO Founder of Commercial Building" ),
    new TestimonialModel ( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","Ravi Smith","CEO Founder of Commercial Building" )
];
   

}
