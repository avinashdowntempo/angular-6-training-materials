import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

@Directive({
  selector: '[angHoverHighlight]'
})
export class HoverHighlightDirective {
  div;
  @Input('angHoverHighlight') color: string;
  @HostBinding('style.border') border: string;
  @HostListener('mouseover') onHover() {
    this.div = this.renderer.createElement('div');
    const text = this.renderer.createText('Are you sure?');
    this.renderer.appendChild(this.div, text);
    this.renderer.appendChild(this.el.nativeElement, this.div);
    // this.el.nativeElement.style.backgroundColor = 'pink';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.border = '2px solid red';
  }
  @HostListener('mouseout') mouseOut() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.renderer.removeChild(this.el.nativeElement, this.div);
    this.border = '0px';
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
