import { Component, Input } from '@angular/core';
import { CardQuicklinkConfig } from './card-quicklink.config';

@Component({
  selector: 'app-card-quicklink',
  templateUrl: './card-quicklink.component.html',
  styleUrls: ['./card-quicklink.component.scss'],
})
export class CardQuicklinkComponent {
  @Input() config: CardQuicklinkConfig;
}
