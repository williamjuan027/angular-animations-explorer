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

      // the bouncy part doesn't work when you pass in an array for "to" like
      // to: ['scale(1,1)', 'scale(1.2,0.8)', 'scale(1,1)]
      animate({
        from: 'scale(1,1)',
        to: 'scale(1.2, 0.8)',
        duration: 200,
        onUpdate: (latest) => {
          this.styler.set('transform', latest);
        },
        onComplete: () => {
          animate({
            from: 'scale(1.2,0.8)',
            to: 'scale(1, 1)',
            type: 'spring',
            stiffness: 700,
            onUpdate: (latest) => {
              this.styler.set('transform', latest);
            },
          });
        },
      });

      // translating
      // animate({
      //   from: 'translateX(-200px)',
      //   to: 'translateX(0px)',
      //   type: 'spring',
      //   onUpdate: (latest) => {
      //     this.styler.set('transform', latest);
      //   },
      // });
    });
  }
}
