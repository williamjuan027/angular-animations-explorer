import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDemoContent]',
})
export class DemoContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
