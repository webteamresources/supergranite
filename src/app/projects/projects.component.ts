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
  pgTitle = "Projects";
  category = "Private Sector Projects"; 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.";
  category2 = "Government Sector Projects";
  description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna at neque aliquam molestie. Etiam aliquet felis nec enim tincidunt vulputate.";

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
