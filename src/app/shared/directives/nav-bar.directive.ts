

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavBar]'
})
export class NavBarDirective {

  constructor(
    private _eleRef : ElementRef
  ) { }
@HostListener('click', ['$event'])
onClick(eve : Event){
  let btnElement = eve.target as HTMLElement
  let btnEle = this._eleRef.nativeElement;


while(btnElement && btnElement !== btnEle ) {
  btnElement = btnElement.parentNode as HTMLElement
}
if(btnElement === btnEle){
  btnEle.nextElementSibling.classList.toggle('show')
}

}

}
