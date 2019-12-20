import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductService } from './../assets/shared/product.service';
import { ShortenPipe } from './../assets/shared/shorten.pipe';
import { FilterColor } from './../assets/shared/filter-color.pipe';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { ClientCounterComponent } from './client-counter/client-counter.component';
import { OurClientComponent } from './our-client/our-client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FaqComponent } from './faq/faq.component';
import { CareerComponent } from './career/career.component';
import { MarblesComponent } from './products/marbles/marbles.component';
import { GranitesComponent } from './products/granites/granites.component';
import { PebbleCobbleComponent } from './products/peeble-and-cobble/pebble-cobble.component';
import { EngineeringStoneComponent } from './products/engineering-stone/engineering-stone.component';
import { FilterOptionComponent } from './products/product-listing/filter-option/filter-option.component';
import { OnHoverDirective } from 'src/assets/shared/on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    TestimonialsComponent,
    HomeComponent,
    BannerComponent,
    ClientCounterComponent,
    ShortenPipe,
    FilterColor,
    OurClientComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    FaqComponent,
    CareerComponent,
    GranitesComponent,
    MarblesComponent,
    EngineeringStoneComponent,
    PebbleCobbleComponent,
    OnHoverDirective,
    FilterOptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
