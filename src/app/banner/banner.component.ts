import { Component, OnInit } from '@angular/core';
import { BannerModel } from 'src/assets/shared/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})

export class BannerComponent implements OnInit {

slides: BannerModel[] = [
    new BannerModel ( "01","../../assets/resources/images/bg_1.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","#" ),
    new BannerModel ( "02","../../assets/resources/images/bg_2.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","#" ),
    new BannerModel ( "03","../../assets/resources/images/bg_3.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","#" ),
    new BannerModel ( "04","../../assets/resources/images/bg_1.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","#" ),
    new BannerModel ( "05","../../assets/resources/images/bg_2.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","#" )
];
  
  constructor() {
  }
  
  ngOnInit() {
  }

}
