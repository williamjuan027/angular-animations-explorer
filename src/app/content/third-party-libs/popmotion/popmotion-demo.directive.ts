import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { animate } from 'popmotion';
import styler, { Styler } from 'stylefire';
import { DefaultPopmotionConfig, IPopmotionConfig } from './popmotion.model';

@Directive({
  selector: '[appStateChangePop]',
})
export class StateChangePopmotionDemoDirective implements OnChanges {
  @Input('appStateChangePop') state?: boolean;
  @Input() config: IPopmotionConfig = DefaultPopmotionConfig;

  private styler: Styler;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {
    this.styler = styler(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngZone.runOutsideAngular(() => {
      if (changes.state) {
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
              stiffness: this.config.stiffness,
              damping: this.config.damping,
              duration: this.config.duration,
              bounce: this.config.bounce,
              velocity: this.config.velocity,
              mass: this.config.mass,
              onUpdate: (latest) => {
                this.styler.set('transform', latest);
              },
            });
          },
        });

        // the bouncy part doesn't work when you pass in an array for "to" like
        // to: ['scale(1,1)', 'scale(1.2,0.8)', 'scale(1,1)]
        // animate({
        //   from: 'scale(1,1)',
        //   to: 'scale(1.2, 0.8)',
        //   duration: 200,
        //   onUpdate: (latest) => {
        //     this.styler.set('transform', latest);
        //   },
        //   onComplete: () => {
        //     animate({
        //       from: 'scale(1.2,0.8)',
        //       to: 'scale(1, 1)',
        //       type: 'spring',
        //       stiffness: 700,
        //       onUpdate: (latest) => {
        //         this.styler.set('transform', latest);
        //       },
        //     });
        //   },
        // });
      }

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
