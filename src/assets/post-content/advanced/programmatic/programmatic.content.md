
Use Angular's `AnimationBuilder` and `AnimationPlayer` to control your Angular Animations. 

In addition to the core functionalities of Angular Animations, programmatic animations via Angular's `AnimationPlayer` contains additional functions to control the animations that's not possible using the template approach.

Below is an example of how you could use this approach to create the animation in the demo.

```markup
<div class="card-container">
    <div #demoCard class="demo-card"></div>
</div>
```

```javascript
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-programmatic-demo',
  templateUrl: './programmatic.demo.component.html'
})
export class ProgrammaticDemoComponent {
  @ViewChild('demoCard') demoCard: ElementRef | undefined;
  
  private animationBuilder = inject(AnimationBuilder);
  private animationPlayer: AnimationPlayer | undefined;
  
  playAnimation(): void { 
    const player = this.getAnimationPlayer();
    if (!player) {
      return;
    }
    player.play();
  }

  pauseAnimation(): void {
    const player = this.getAnimationPlayer();
    if (!player || !player.hasStarted) {
      return;
    }
    player.pause();
  }

  stopAnimation(): void {
    const player = this.getAnimationPlayer();
    if (!player || !player.hasStarted) {
      return;
    }
    player.finish();
  }

  resetAnimation(): void {
    const player = this.getAnimationPlayer();
    if (!player || !player.hasStarted) {
      return;
    }
    player.reset();
  }

  private getAnimationPlayer(): AnimationPlayer | undefined {
    if (!this.demoCard?.nativeElement) {
      return;
    }
    if (!this.animationPlayer) {
      const factory = this.animationBuilder.build(
        [
          style({ transform: 'rotate(0deg)' }),
          animate('1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'rotate(360deg)' }))
        ]
      );
      this.animationPlayer = factory.create(this.demoCard.nativeElement);
    }
    return this.animationPlayer;
  }

}
```
