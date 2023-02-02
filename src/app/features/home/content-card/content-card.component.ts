import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Content } from '@app/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
})
export class ContentCardComponent {
    @Input() content!: Content;
}