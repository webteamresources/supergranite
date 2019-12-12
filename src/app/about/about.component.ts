import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  configUrl = '../../assets/content/aboutpage.json';
  aboutPageContent = [];

  ngOnInit() {
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.aboutPageContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
