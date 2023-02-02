import {
  Directive,
  ViewContainerRef,
  EventEmitter,
  Output,
  AfterViewInit,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDemoContent]',
})
export class DemoContentDirective implements AfterViewInit {
  @Output() componentLoaded = new EventEmitter<ViewContainerRef>();
  constructor(public viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentLoaded.emit(this.viewContainerRef);
  }
}
