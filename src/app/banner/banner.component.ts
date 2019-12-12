import { BannerService } from './../../assets/shared/banner.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Result } from './results';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BannerComponent implements OnInit {

  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
  
  constructor(private bannerService: BannerService) { 
    this.sliderArray = [];    
    this.selectedIndex = 0;
    this.transform = 100;
  }
  
  ngOnInit() {
    this.bannerService.getData().subscribe((result: Result)=>{
      this.sliderArray = result.sliderArray;
    })
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > this.sliderArray.length) {
       this.selectedIndex = 0;
     }
   }


}
