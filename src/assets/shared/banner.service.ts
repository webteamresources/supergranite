import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BannerModel } from './banner.model';
import { Router } from '@angular/router';

const URL = '../../assets/content/banner-data.json';

@Injectable({
 providedIn: 'root'
})
export class BannerService {

 constructor(private router: Router, private http: HttpClient) { }

 slides: BannerModel[] = [
      new BannerModel ( "01","../../assets/resources/images/bg_1.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","https://www.npmjs.com/package/ngx-owl-carousel-o" ),
      new BannerModel ( "02","../../assets/resources/images/bg_1.jpg","Random first slide","Random first slide","Since 1979","We Love Modern Designs","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.","https://www.npmjs.com/package/ngx-owl-carousel-o" )
  ];

 getData() {
   return this.http.get(URL)
 }
}