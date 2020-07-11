import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss'],
})
export class ButtonBasicComponent {
  @Input() text?: string;
  @Input() disabled = false;
}
