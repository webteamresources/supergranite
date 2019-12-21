import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  // @HostBinding('class.show') isOpen = false;
  // @HostListener('mouseover')toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }
  constructor() { }
    
    ngOnInit(){
    }

    @HostBinding('class.show') isOpen = false;


    @HostListener('mouseenter') mouseover(){
      this.isOpen = !this.isOpen;
    }

    @HostListener('mouseleave') mouseleave(){
      this.isOpen = false;
    }

}
