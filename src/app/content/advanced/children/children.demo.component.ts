import { Component } from '@angular/core';
import { Container, EnterExitLeft, EnterExitRight } from './children.animation';

@Component({
  selector: 'app-children-demo',
  templateUrl: './children.demo.component.html',
  styleUrls: ['./children.demo.component.scss'],
  animations: [Container, EnterExitLeft, EnterExitRight],
})
export class ChildrenDemoComponent {
  isDisplayed = true;

  toggleIsDisplayed(): void {
    this.isDisplayed = !this.isDisplayed;
  }
}
