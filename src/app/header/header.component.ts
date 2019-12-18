import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  configUrl = "../../assets/content/common.json";
  commonData;

  constructor(private http: HttpClient) { }

  ngOnInit() {    
    this.http.get(this.configUrl).subscribe(
      data => {
        this.commonData = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  };


}
