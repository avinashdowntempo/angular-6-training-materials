import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Directive({
  selector: '[angErrorLog]'
})
export class ErrorLogDirective implements AfterViewInit {
  @Input('angErrorLog') error;
  errorlog;
  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2) {
  }
  ngAfterViewInit() {
    this.renderer.listen(this.el.nativeElement, 'invalid', () => {
      console.log('error');

    });
  }
  @HostListener('focusin') focusin() {
    this.displayError();
  }
  @HostListener('keyup') keyup() {
    this.displayError();
  }
  @HostListener('focusout') focusout() {
    this.displayError();
  }
  displayError() {
    try {
      this.renderer.removeChild(this.el.nativeElement.parentNode, this.errorlog);
    } catch (err) {
      console.log('no node to remove');
    }
    if (this.error.errors) {
      console.log('focus in' + JSON.stringify(this.error.errors));
      this.errorlog = this.renderer.createElement('div');
      const errormsg = this.renderer.createText(JSON.stringify(this.error.errors));
      this.renderer.addClass(this.errorlog, 'error-msg');
      this.renderer.setProperty(this.errorlog, 'id', 'error');
      this.renderer.appendChild(this.errorlog, errormsg);
      const parent = this.el.nativeElement.parentNode;
      this.renderer.insertBefore(parent, this.errorlog, this.renderer.nextSibling(this.el.nativeElement));
      console.log(this.renderer.nextSibling(this.el.nativeElement));
    }
  }
}
