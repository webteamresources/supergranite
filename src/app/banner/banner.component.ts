import { Component, OnInit } from '@angular/core';
import { BannerModel } from 'src/assets/shared/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})

export class BannerComponent implements OnInit {

slides: BannerModel[] = [
    new BannerModel ( "01","../../assets/resources/images/bg_1.jpg","Modern Designs, Conventional and Exotic.","Modern Designs, Conventional and Exotic.","Since 1979","Modern Designs, Conventional and Exotic." ),
    new BannerModel ( "02","../../assets/resources/images/bg_2.jpg","For Creating Amazing Architecture Designs.","For Creating Amazing Architecture Designs.","Since 1979","For Creating Amazing Architecture Designs." )
];
  
  constructor() {
  }
  
  ngOnInit() {
  }

}
