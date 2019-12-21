import { Component, ViewEncapsulation } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  providers: [NgbAccordionConfig]
})
export class FaqComponent {
  pgTitle = 'FAQs';
  titleTxt = 'FAQs';
  faqList = [
    {title:'Where are granites available in India?', content:'Granites are available in North as well as South India. Major North Indian states that are rich in granite deposits are Rajasthan, West Bengal, Uttar Pradesh and Bihar, whereas Karnataka, Tamil Nadu and Andhra Pradesh are South Indian states that have abundant reserves of granite.'},
    {title:'Can we combine North and South Indian granites?', content:'Practically this is not feasible, because of huge distance between quarrying and processing centers of North and South India. The high transportation cost of granite from the North to the South or vice versa might lead to overall increase in the product cost. To avoid this, separate containers for North and South India granite variants are made.'},
    {title:'What are the different granite products?', content:'In various shades, patterns and finishes, granites from North and South India are available in the forms of tiles, slabs and blocks. Available in standard dimensions, granite products can be customized for size and thickness as per the requirement and application needs. Granite tombstones and monuments are also available (Kindly visit the “Granite Monuments” sub-category in the “Product” section of our website).'}
  ]

  constructor(config: NgbAccordionConfig) {
    config.type = 'info';
  }

}
