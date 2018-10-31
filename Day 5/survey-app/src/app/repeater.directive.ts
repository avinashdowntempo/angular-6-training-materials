import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[angRepeater]'
})
export class RepeaterDirective implements OnInit {
  @Input('angRepeater') number;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }
  ngOnInit() {
    console.log(this.number);
    while (this.number) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.number--;
    }
  }

}
