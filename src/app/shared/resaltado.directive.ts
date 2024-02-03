import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // realizamos la inyeccion de dependencias
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'rgb(0, 131, 165)');
   }

}
