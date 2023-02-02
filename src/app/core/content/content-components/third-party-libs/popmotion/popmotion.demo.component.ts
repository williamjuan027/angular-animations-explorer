import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StateChangePopmotionDemoDirective } from './popmotion-demo.directive';
import {
  DefaultPopmotionConfig,
  PopmotionSliderSettings,
} from './popmotion.model';

@Component({
  standalone: true,
  imports: [CommonModule, StateChangePopmotionDemoDirective],
  selector: 'app-popmotion-demo',
  templateUrl: './popmotion.demo.component.html',
  styleUrls: ['./popmotion.demo.component.scss'],
})
export class PopmotionDemoComponent {
  isEnabled = true;

  defaultPopmotionConfig = DefaultPopmotionConfig;
  popmotionSliderSettings = PopmotionSliderSettings;

  popmotionConfig = { ...this.defaultPopmotionConfig };

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
