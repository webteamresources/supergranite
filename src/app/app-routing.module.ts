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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent, data: { breadcrumb: 'Home' }, pathMatch:'full'},
  {path:'home', component:HomeComponent, data: { breadcrumb: 'Home' }},
  {path:'about', component:AboutComponent, data: { breadcrumb: 'About' }},
  {path:'products', component:ProductsComponent, children:[
    {path:'', component:ProductListingComponent, pathMatch:'full'},
    {path:'granites', component:GranitesComponent, data: { breadcrumb: 'Granites' }},
    {path:'marbles', component:MarblesComponent, data: { breadcrumb: 'Marbles' }},
    {path:'engineering-stone', component:EngineeringStoneComponent, data: { breadcrumb: 'Engineering Stone'}},
    {path:'pebble-and-cobble', component:PebbleCobbleComponent, data: { breadcrumb: 'Pebble and Cobble' }},
    {path:'products-details', component:ProductDetailsComponent, data: { breadcrumb: 'Products Details' }}
  ]},
  
  {path:'projects', component:ProjectsComponent, data: { breadcrumb: 'Projects'}},
  {path:'career', component:CareerComponent, data: { breadcrumb: 'Career'}},
  {path:'contact', component:ContactComponent, data: { breadcrumb: 'Contact'}},
  {path:'privacy-policy', component:PrivacyPolicyComponent, data: { breadcrumb: 'Privacy Policy'}},
  {path:'disclaimer', component:DisclaimerComponent, data: { breadcrumb: 'Disclaimer'}},
  {path:'faq', component: FaqComponent, data: { breadcrumb: 'faqs'}},  
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: { breadcrumb: '404'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
