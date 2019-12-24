import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FaqComponent } from './faq/faq.component';
import { CareerComponent } from './career/career.component';
import { MarblesComponent } from './products/marbles/marbles.component';
import { PebbleCobbleComponent } from './products/peeble-and-cobble/pebble-cobble.component';
import { EngineeringStoneComponent } from './products/engineering-stone/engineering-stone.component';
import { GranitesComponent } from './products/granites/granites.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'', component:ProductListingComponent, pathMatch:'full'},
    {path:'granites', component:GranitesComponent},
    {path:'marbles', component:MarblesComponent},
    {path:'engineering-stone', component:EngineeringStoneComponent},
    {path:'pebble-and-cobble', component:PebbleCobbleComponent},
    {path:'products-details', component:ProductDetailsComponent}
  ]},
  {path:'products-details', component:ProductDetailsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'career', component:CareerComponent},
  {path:'contact', component:ContactComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'disclaimer', component:DisclaimerComponent},
  {path:'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
