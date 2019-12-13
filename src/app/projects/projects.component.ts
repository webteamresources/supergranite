import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  configUrl = '../../../assets/content/projects.json';
  projectsContent = [];
  projectsDetails = [];
  projectsDetails2 = [];
  ngOnInit() {    
    this.httpService.get(this.configUrl).subscribe(
      data => {
        this.projectsContent = data as string [];
        this.projectsDetails = this.projectsContent['projectsDetails'];
        this.projectsDetails2 = this.projectsContent['projectsDetails2'];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  };


}
