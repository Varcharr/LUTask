import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[essentialFunctionality]',
})
export class EssentialDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mosueOver(event: Event) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'top',
      this.random(10, 90) + 1 + '%'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'left',
      this.random(10, 90) + '%'
    );
  }

  random(min, max) {
    return (
      (Math.random() * ((max ? max : min) - (max ? min : 0) + 1) +
        (max ? min : 0)) |
      0
    );
  }
}
