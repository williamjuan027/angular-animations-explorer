This example uses [Popmotion](https://popmotion.io) to animate the Card's state change.

```ts
import { Directive, ElementRef, Input, NgZone, OnChanges } from '@angular/core';
import { animate } from 'popmotion';
import styler, { Styler } from 'stylefire';

@Directive({
  selector: '[appStateChangePop]',
})
export class StateChangePopmotionDemoDirective implements OnChanges {
  @Input('appStateChangePop') state?: boolean;

  private styler: Styler;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {
    this.styler = styler(this.el.nativeElement);
  }

  ngOnChanges() {
    this.ngZone.runOutsideAngular(() => {
      animate({
        from: Number(this.styler.get('opacity')),
        to: this.state ? 1 : 0.5,
        duration: 300,
        type: 'spring',
        onUpdate: (latest) => {
          this.styler.set('opacity', latest);
        },
      });
      animate({
        to: ['scale(1)', 'scale(1.05)', 'scale(1)'],
        type: 'spring',
        duration: 300,
        onUpdate: (latest) => {
          this.styler.set('transform', latest);
        },
      });
    });
  }
}
```

```html
<div class="card" [appStateChangePop]="isEnabled">
  <!-- ... -->
</div>
```
