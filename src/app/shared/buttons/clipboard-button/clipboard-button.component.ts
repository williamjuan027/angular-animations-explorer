import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'app-clipboard-button',
    templateUrl: './clipboard-button.component.html'
})
export class ClipboardButtonComponent {
    clipboardButtonState: 'idle' | 'copied' = 'idle';
    onClick(): void {
        this.clipboardButtonState = this.clipboardButtonState === 'idle' ? 'copied' : 'idle';
        if (this.clipboardButtonState === 'copied') {
            setTimeout(() => {
                this.clipboardButtonState = 'idle';
            }, 3000)
        }
    }
}
