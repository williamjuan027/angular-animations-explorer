import { Component, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    selector: 'app-enter-exit-css-demo',
    templateUrl: './enter-exit-css.demo.component.html',
    styles: `
        .demo-card {
            opacity: 1;
            transform: translateY(0);
            transition: all 500ms;
            @starting-style {
                opacity: 0;
                transform: translateY(10px);
            }
            &.deleting {
                opacity: 0;
                transform: translateY(10px);
            }
        }   
  `
})
export class EnterExitDemoCSSComponent {
  cardIsDisplayed = signal(true);
  deleting = signal(false);
  private el = inject(ElementRef);


  toggleCard(): void {
     if (this.cardIsDisplayed()) {
      const target = this.el.nativeElement.querySelector('.demo-card');
      target.addEventListener('transitionend', () => {
         this.cardIsDisplayed.set(false);
        this.deleting.set(false);
      });
      this.deleting.set(true);
    } else {
      this.cardIsDisplayed.update(isDisplayed => !isDisplayed)
    }
  }
}
