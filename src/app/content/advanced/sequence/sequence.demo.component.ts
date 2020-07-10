import { Component } from '@angular/core';
import {
  FadeGrowSequence,
  FadeGrowGroup,
  FadeGrowStagger,
} from './sequence.animation';

type TSequence = 'SEQUENCE' | 'GROUP' | 'STAGGER' | null;

@Component({
  selector: 'app-sequence-demo',
  templateUrl: './sequence.demo.component.html',
  styleUrls: ['./sequence.demo.component.scss'],
  animations: [FadeGrowSequence, FadeGrowGroup, FadeGrowStagger],
})
export class SequenceDemoComponent {
  sequenceSelected: TSequence = 'SEQUENCE';
  sequenceChangeQueued: TSequence = 'SEQUENCE';

  selectSequence(sequence: TSequence): void {
    this.sequenceSelected = null;
    this.sequenceChangeQueued = sequence;
  }

  animationDone(): void {
    this.sequenceSelected = this.sequenceChangeQueued;
  }
}