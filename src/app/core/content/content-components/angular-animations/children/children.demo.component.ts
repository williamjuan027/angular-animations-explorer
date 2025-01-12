import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Container, EnterExitLeft, EnterExitRight } from './children.animation';

@Component({
    imports: [CommonModule],
    selector: 'app-children-demo',
    templateUrl: './children.demo.component.html',
    animations: [Container, EnterExitLeft, EnterExitRight]
})
export class ChildrenDemoComponent {
  isDisplayed = true;

  toggleIsDisplayed(): void {
    this.isDisplayed = !this.isDisplayed;
  }
}
