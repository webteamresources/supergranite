import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configUrl = "../../assets/content/common.json";
  commonData;

  constructor(private http: HttpClient) { }

  ngOnInit() {    
    this.http.get(this.configUrl)
    .subscribe(
      data => {
        this.commonData = data as string[];
        console.log(this.commonData);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  };

}
