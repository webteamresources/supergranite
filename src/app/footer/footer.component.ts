import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configUrl = "../../assets/content/common.json";
  commonData: any;
  homeData = [];
  productData = [];
  otherData: any;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faArrowRight = faArrowRight;
  constructor(private http: HttpClient) { }

  ngOnInit() {    
    this.http.get(this.configUrl)
    .subscribe(
      data => {
        this.commonData = data as string[];
        this.homeData = this.commonData['pgData'];
        this.productData = this.commonData['productPg'];
        this.otherData = this.commonData['otherData'];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  };

}
