import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { animate } from 'popmotion';
import styler, { Styler } from 'stylefire';
import { DefaultPopmotionConfig, IPopmotionConfig } from './popmotion.model';

@Directive({
  standalone: true,
  selector: '[appStateChangePop]',
})
export class StateChangePopmotionDemoDirective implements OnChanges {
  @Input('appStateChangePop') state?: boolean;
  @Input() config: IPopmotionConfig = DefaultPopmotionConfig;
  @Output() animationComplete = new EventEmitter<void>();

  private styler: Styler;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {
    this.styler = styler(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngZone.runOutsideAngular(() => {
      if (changes['state'].currentValue === true) {
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
              duration: 300,
              // WIP
              // stiffness: this.config.stiffness,
              // damping: this.config.damping,
              // duration: this.config.duration,
              // bounce: this.config.bounce,
              // velocity: this.config.velocity,
              // mass: this.config.mass,
              onUpdate: (latest) => {
                this.styler.set('transform', latest);
              },
              onComplete: () => {
                this.ngZone.run(() => {
                  this.animationComplete.emit();
                })
              }
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
