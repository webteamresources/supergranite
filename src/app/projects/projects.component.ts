import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  // projectsDetails2 = [];
  pgTitle = "Projects";
  // category = "Private Sector Projects"; 
  // description = "An experience of over couple of decades has made us a part of hundreds of interiors from a house to commercial offices. Granite counter tops to our very well-known engineered composite and quartz stone slabs flooring are part of our customer favorites.";
  // category2 = "Government Sector Projects";
  // description2 = "The Company shares an indisputable reputation across the industry in India and is a trusted name owing to its honest and dedicated business policies in the country. We are privileged to vendor our products to nationalized projects viz. Government offices, Airport lobbies, Central Gardens and parks, etc.";

ngOnInit() {    
    this.getProject().subscribe(data => {
      this.projectsContent = data['productDetails'];
      this.projectsDetails = this.projectsContent['product'];
    });
    
  };

  getProject() {
    return this.httpService.get(this.configUrl);
} 


}
