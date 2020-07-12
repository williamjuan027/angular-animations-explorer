import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-demo',
  templateUrl: './attribute-directive.demo.component.html',
  styleUrls: ['./attribute-directive.demo.component.scss'],
})
export class AttributeDirectiveDemoComponent {
  isAnimating = false;
  isDisabled = false;

  toggleIsDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  playAnimation(): void {
    this.isAnimating = true;
  }

  animationDone(): void {
    this.isAnimating = false;
  }
}
