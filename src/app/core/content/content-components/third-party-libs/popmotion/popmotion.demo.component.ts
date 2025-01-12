import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StateChangePopmotionDemoDirective } from './popmotion-demo.directive';
import {
  DefaultPopmotionConfig,
  PopmotionSettings,
  PopmotionSliderSettings,
} from './popmotion.model';

@Component({
    imports: [CommonModule, StateChangePopmotionDemoDirective],
    selector: 'app-popmotion-demo',
    templateUrl: './popmotion.demo.component.html',
    styleUrls: ['./popmotion.demo.component.scss']
})
export class PopmotionDemoComponent {
  isAnimating = false;

  defaultPopmotionConfig = DefaultPopmotionConfig;
  popmotionSliderSettings = PopmotionSliderSettings;

  popmotionConfig = { ...this.defaultPopmotionConfig };

  playAnimation(): void {
    this.isAnimating = true;
  }

  onAnimationComplete(): void {
    this.isAnimating = false
  }

  onRangeUpdated(configKey: PopmotionSettings, args: any): void {
    const currentValue = args.target.value as number;
    this.popmotionConfig[configKey] = currentValue;
  }
}
