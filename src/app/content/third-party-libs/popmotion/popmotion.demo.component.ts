import { Component } from '@angular/core';
import {
  DefaultPopmotionConfig,
  PopmotionSliderSettings,
} from './popmotion.model';

@Component({
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
