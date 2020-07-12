import { Directive, HostListener, ElementRef } from '@angular/core';
import {
  AnimationBuilder,
  AnimationMetadata,
  style,
  animate,
} from '@angular/animations';

@Directive({
  selector: '[appFadeMouseDown]',
})
export class FadeMouseDownDirective {
  @HostListener('mousedown') mouseDown() {
    this.playAnimation(this.getFadeOutAnimation());
  }

  @HostListener('mouseup') mouseUp() {
    this.playAnimation(this.getFadeInAnimation());
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private playAnimation(animationMetaData: AnimationMetadata[]): void {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }

  private getFadeInAnimation(): AnimationMetadata[] {
    return [animate('400ms ease-in', style({ opacity: 1 }))];
  }

  private getFadeOutAnimation(): AnimationMetadata[] {
    return [animate('400ms ease-in', style({ opacity: 0.5 }))];
  }
}
