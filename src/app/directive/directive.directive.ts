import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]',
  standalone: false
})
export class DirectiveDirective {

  constructor(public elemRef: ElementRef, public renderer: Renderer2) { 
    this.renderer.setStyle
    (this.elemRef.nativeElement, 
      'font-size', '40px'
    );

    this.renderer.setStyle
    (this.elemRef.nativeElement, 'color', 'orange');

    this.renderer.setStyle
    (this.elemRef.nativeElement, 'text-transform', 'lowercase');

    this.renderer.setStyle
    (this.elemRef.nativeElement, 'text-decoration', 'underline');

  }
}

