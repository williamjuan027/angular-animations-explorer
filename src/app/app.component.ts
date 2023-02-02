import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent, FooterComponent } from '@app/shared';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ToolbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}