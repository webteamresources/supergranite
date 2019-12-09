import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  configUrl = '../../assets/content/aboutpage.json';
  AboutPageContent = [];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.AboutPageContent = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
