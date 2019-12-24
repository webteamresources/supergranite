import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 

  constructor() { }
  pgTitle = 'Products';
  ngOnInit(){
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }
//   onSelect(selectedColor) {  
//     selectedColor = null;
//     for (var i = 0; i < this.colorName.length; i++)
//     {
//       if (this.selectedColor[i] == this.colorName) {
//         this.selectedColor = this.selectedColor[i];
//       }
//     }
//     console.log(selectedColor);
// }    

}
