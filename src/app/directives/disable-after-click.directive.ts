import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClickDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const nativeElement = this.el.nativeElement;
    const originalText = nativeElement.innerText;

   
    this.renderer.setProperty(nativeElement, 'disabled', true);
    this.renderer.setProperty(nativeElement, 'innerText', 'Processing...');

   
    setTimeout(() => {
      this.renderer.setProperty(nativeElement, 'disabled', false);
      this.renderer.setProperty(nativeElement, 'innerText', originalText);
    }, 3000);
  }
}